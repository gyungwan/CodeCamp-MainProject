const sharp = require("sharp");
const { Storage } = require("@google-cloud/storage");

//commonjs 방식  구글 펑션은 엤날방식으로 import 해옴

/**
 * Triggered from a change to a Cloud Storage bucket.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */

exports.generateThumbnail = async (event, context) => {
  //1. event와 context의 데이터를 간단히 로그로 확인하기
  console.log("hello world!!");
  console.log("========================");
  console.log("context:", context);
  console.log("event", event);
  console.log("=========================");
  const gcsEvent = event;
  console.log(`Processing file: ${gcsEvent.name}`);

  // 2. 이미 썸네일이 있는 경우 종료(즉, 썸네일로 트리건된 경우 )
  if (event.name.includes("thumb/")) return;

  // 3. 썸네일 프로세스
  const storage = new Storage().bucket(event.bucket); //bucketname
  await Promise.all([
    [
      { size: 320, fname: "thumb/s/" },
      { size: 640, fname: "thumb/m/" },
      { size: 1280, fname: "thumb/l/" },
    ].map(
      (el) =>
        new Promise((resolve, reject) => {
          storage
            .file(event.name)
            .createReadStream() // 4. 기존의 파일을 읽어오기
            //5. event 안에 있는 file 을  활용하여 썸네일 생성
            .pipe(sharp().resize({ wjdth: el.size })) //가로길이에 맞게끔 비율이 자동으로  만든 썸네일을 버킷으로 업로드
            .pipe(storage.file(`${el.fname}/${event.name}`).createReadStream()) //6. 생선된 썸네일을 재업로드
            .on("finish", () => resolve())
            .on("error", () => reject());
        })
    ),
  ]);
};
