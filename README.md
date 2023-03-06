<h1> CodeCamp-MainProject - Musinsa </h1>

## Description

### 무신사 서비스를 보며 만들어본 개인 프로젝트입니다
<br/><br/>

---------------------



## stack
 *Nest.js <br/>
 *GraphQl<br/>
 *Typescript<br/>
 *TyprOrm<br/>
 *GCP<br/>
 <br/><br/><br/>
 
 
 ----------------------
 
 ## ERD
 https://www.erdcloud.com/d/qEsLChfvMYubybpsm
<img width="916" alt="스크린샷 2023-03-06 오후 3 40 08" src="https://user-images.githubusercontent.com/113571059/223037721-5d62367e-5708-44fe-b4a2-e98a895db9ee.png">

<br/><br/><br/><br/>


## Directory
<br/><br/>
📦src<br/>
 ┣ 📂apis<br/>
 ┃ ┣ 📂Like<br/>
 ┃ ┃ ┗ 📂entities<br/>
 ┃ ┃ ┃ ┗ 📜like.entity.ts<br/>
 ┃ ┣ 📂address<br/>
 ┃ ┃ ┗ 📂entities<br/>
 ┃ ┃ ┃ ┗ 📜address.entity.ts<br/>
 ┃ ┣ 📂auth<br/>
 ┃ ┃ ┣ 📂interface<br/>
 ┃ ┃ ┃ ┗ 📜auth-service.interface.ts<br/>
 ┃ ┃ ┣ 📜.DS_Store<br/>
 ┃ ┃ ┣ 📜auth.controller.ts<br/>
 ┃ ┃ ┣ 📜auth.module.ts<br/>
 ┃ ┃ ┣ 📜auth.resolver.ts<br/>
 ┃ ┃ ┗ 📜auth.service.ts<br/>
 ┃ ┣ 📂files<br/>
 ┃ ┃ ┣ 📂interfaces<br/>
 ┃ ┃ ┃ ┗ 📜files-service.interface.ts<br/>
 ┃ ┃ ┣ 📜files.module.ts<br/>
 ┃ ┃ ┣ 📜files.resolver.ts<br/>
 ┃ ┃ ┗ 📜files.service.ts<br/>
 ┃ ┣ 📂iamport<br/>
 ┃ ┃ ┣ 📜iamport.service copy.ts<br/>
 ┃ ┃ ┣ 📜iamport.service.ts<br/>
 ┃ ┃ ┗ 📜iamport_Service.ts<br/>
 ┃ ┣ 📂images<br/>
 ┃ ┃ ┣ 📂dto<br/>
 ┃ ┃ ┃ ┗ 📜product-image.input.ts<br/>
 ┃ ┃ ┣ 📂entities<br/>
 ┃ ┃ ┃ ┗ 📜image.entity.ts<br/>
 ┃ ┃ ┣ 📜images.module.ts<br/>
 ┃ ┃ ┣ 📜images.resolver.ts<br/>
 ┃ ┃ ┗ 📜images.service.ts<br/>
 ┃ ┣ 📂mainCategories<br/>
 ┃ ┃ ┣ 📂entities<br/>
 ┃ ┃ ┃ ┗ 📜mainCategory.entity.ts<br/>
 ┃ ┃ ┣ 📂interface<br/>
 ┃ ┃ ┃ ┗ 📜products-mainCategory-service.interface.ts<br/>
 ┃ ┃ ┣ 📜productsMainCategories.module.ts<br/>
 ┃ ┃ ┣ 📜productsMainCategories.resolver.ts<br/>
 ┃ ┃ ┗ 📜productsMainCategories.service.ts<br/>
 ┃ ┣ 📂payments<br/>
 ┃ ┃ ┣ 📂entities<br/>
 ┃ ┃ ┃ ┗ 📜payment.entity.ts<br/>
 ┃ ┃ ┣ 📂interface<br/>
 ┃ ┃ ┃ ┗ 📜payment.interface.ts<br/>
 ┃ ┃ ┣ 📜payments.module.ts<br/>
 ┃ ┃ ┣ 📜payments.resolver.ts<br/>
 ┃ ┃ ┗ 📜payments.service.ts<br/>
 ┃ ┣ 📂productTags<br/>
 ┃ ┃ ┗ 📂entities<br/>
 ┃ ┃ ┃ ┗ 📜productTag.entity.ts<br/>
 ┃ ┣ 📂products<br/>
 ┃ ┃ ┣ 📂dto<br/>
 ┃ ┃ ┃ ┣ 📜create-product.input.ts<br/>
 ┃ ┃ ┃ ┗ 📜update-product.input.ts<br/>
 ┃ ┃ ┣ 📂entities<br/>
 ┃ ┃ ┃ ┗ 📜product.entity.ts<br/>
 ┃ ┃ ┣ 📂interface<br/>
 ┃ ┃ ┃ ┗ 📜products-service.interface.ts<br/>
 ┃ ┃ ┣ 📜products.module.ts<br/>
 ┃ ┃ ┣ 📜products.resolver.ts<br/>
 ┃ ┃ ┗ 📜products.service.ts<br/>
 ┃ ┣ 📂sizes<br/>
 ┃ ┃ ┣ 📂dto<br/>
 ┃ ┃ ┃ ┗ 📜product-size.input.ts<br/>
 ┃ ┃ ┗ 📂entities<br/>
 ┃ ┃ ┃ ┗ 📜size.entity.ts<br/>
 ┃ ┣ 📂subCategories<br/>
 ┃ ┃ ┣ 📂dto<br/>
 ┃ ┃ ┃ ┗ 📜product-sub-category.input.ts<br/>
 ┃ ┃ ┣ 📂entities<br/>
 ┃ ┃ ┃ ┗ 📜subCategory.entity.ts<br/>
 ┃ ┃ ┣ 📂interface<br/>
 ┃ ┃ ┃ ┗ 📜products-subCategory-service.interface.ts<br/>
 ┃ ┃ ┣ 📜productsSubCategories.module.ts<br/>
 ┃ ┃ ┣ 📜productsSubCategories.resolver.ts<br/>
 ┃ ┃ ┗ 📜productsSubCategories.service.ts<br/>
 ┃ ┣ 📂users<br/>
 ┃ ┃ ┣ 📂dto<br/>
 ┃ ┃ ┃ ┣ 📜create-user.input.ts<br/>
 ┃ ┃ ┃ ┗ 📜update-user.input.ts<br/>
 ┃ ┃ ┣ 📂entities<br/>
 ┃ ┃ ┃ ┗ 📜user.entity.ts<br/>
 ┃ ┃ ┣ 📂interfaces<br/>
 ┃ ┃ ┃ ┗ 📜users-service.interface.ts<br/>
 ┃ ┃ ┣ 📜users.module.ts<br/>
 ┃ ┃ ┣ 📜users.resolver.ts<br/>
 ┃ ┃ ┗ 📜users.service.ts<br/>
 ┃ ┗ 📜.DS_Store<br/>
 ┣ 📂commons<br/>
 ┃ ┣ 📂auth<br/>
 ┃ ┃ ┣ 📜gql-auth.guard.ts<br/>
 ┃ ┃ ┣ 📜jwt-access.strategy.ts<br/>
 ┃ ┃ ┣ 📜jwt-refresh.strategy.ts<br/>
 ┃ ┃ ┣ 📜jwt-social-google.strategy.ts<br/>
 ┃ ┃ ┣ 📜jwt-social-kakao.strategy.ts<br/>
 ┃ ┃ ┗ 📜jwt-social-naver.strategy.ts<br/>
 ┃ ┣ 📂graphql<br/>
 ┃ ┃ ┗ 📜schema.gql<br/>
 ┃ ┣ 📂libraries<br/>
 ┃ ┃ ┗ 📜utils.ts<br/>
 ┃ ┣ 📂types<br/>
 ┃ ┃ ┗ 📜context.ts<br/>
 ┃ ┗ 📜.DS_Store<br/>
 ┣ 📜.DS_Store<br/>
 ┣ 📜app.controller.ts<br/>
 ┣ 📜app.module.ts<br/>
 ┗ 📜main.ts<br/>
<br/><br/><br/><br/><br/>
