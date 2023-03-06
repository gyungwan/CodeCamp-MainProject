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


📦src
 ┣ 📂apis
 ┃ ┣ 📂Like
 ┃ ┃ ┗ 📂entities
 ┃ ┃ ┃ ┗ 📜like.entity.ts
 ┃ ┣ 📂address
 ┃ ┃ ┗ 📂entities
 ┃ ┃ ┃ ┗ 📜address.entity.ts
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂interface
 ┃ ┃ ┃ ┗ 📜auth-service.interface.ts
 ┃ ┃ ┣ 📜.DS_Store
 ┃ ┃ ┣ 📜auth.controller.ts
 ┃ ┃ ┣ 📜auth.module.ts
 ┃ ┃ ┣ 📜auth.resolver.ts
 ┃ ┃ ┗ 📜auth.service.ts
 ┃ ┣ 📂files
 ┃ ┃ ┣ 📂interfaces
 ┃ ┃ ┃ ┗ 📜files-service.interface.ts
 ┃ ┃ ┣ 📜files.module.ts
 ┃ ┃ ┣ 📜files.resolver.ts
 ┃ ┃ ┗ 📜files.service.ts
 ┃ ┣ 📂iamport
 ┃ ┃ ┣ 📜iamport.service copy.ts
 ┃ ┃ ┣ 📜iamport.service.ts
 ┃ ┃ ┗ 📜iamport_Service.ts
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┗ 📜product-image.input.ts
 ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┗ 📜image.entity.ts
 ┃ ┃ ┣ 📜images.module.ts
 ┃ ┃ ┣ 📜images.resolver.ts
 ┃ ┃ ┗ 📜images.service.ts
 ┃ ┣ 📂mainCategories
 ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┗ 📜mainCategory.entity.ts
 ┃ ┃ ┣ 📂interface
 ┃ ┃ ┃ ┗ 📜products-mainCategory-service.interface.ts
 ┃ ┃ ┣ 📜productsMainCategories.module.ts
 ┃ ┃ ┣ 📜productsMainCategories.resolver.ts
 ┃ ┃ ┗ 📜productsMainCategories.service.ts
 ┃ ┣ 📂payments
 ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┗ 📜payment.entity.ts
 ┃ ┃ ┣ 📂interface
 ┃ ┃ ┃ ┗ 📜payment.interface.ts
 ┃ ┃ ┣ 📜payments.module.ts
 ┃ ┃ ┣ 📜payments.resolver.ts
 ┃ ┃ ┗ 📜payments.service.ts
 ┃ ┣ 📂productTags
 ┃ ┃ ┗ 📂entities
 ┃ ┃ ┃ ┗ 📜productTag.entity.ts
 ┃ ┣ 📂products
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📜create-product.input.ts
 ┃ ┃ ┃ ┗ 📜update-product.input.ts
 ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┗ 📜product.entity.ts
 ┃ ┃ ┣ 📂interface
 ┃ ┃ ┃ ┗ 📜products-service.interface.ts
 ┃ ┃ ┣ 📜products.module.ts
 ┃ ┃ ┣ 📜products.resolver.ts
 ┃ ┃ ┗ 📜products.service.ts
 ┃ ┣ 📂sizes
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┗ 📜product-size.input.ts
 ┃ ┃ ┗ 📂entities
 ┃ ┃ ┃ ┗ 📜size.entity.ts
 ┃ ┣ 📂subCategories
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┗ 📜product-sub-category.input.ts
 ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┗ 📜subCategory.entity.ts
 ┃ ┃ ┣ 📂interface
 ┃ ┃ ┃ ┗ 📜products-subCategory-service.interface.ts
 ┃ ┃ ┣ 📜productsSubCategories.module.ts
 ┃ ┃ ┣ 📜productsSubCategories.resolver.ts
 ┃ ┃ ┗ 📜productsSubCategories.service.ts
 ┃ ┣ 📂users
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📜create-user.input.ts
 ┃ ┃ ┃ ┗ 📜update-user.input.ts
 ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┗ 📜user.entity.ts
 ┃ ┃ ┣ 📂interfaces
 ┃ ┃ ┃ ┗ 📜users-service.interface.ts
 ┃ ┃ ┣ 📜users.module.ts
 ┃ ┃ ┣ 📜users.resolver.ts
 ┃ ┃ ┗ 📜users.service.ts
 ┃ ┗ 📜.DS_Store
 ┣ 📂commons
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜gql-auth.guard.ts
 ┃ ┃ ┣ 📜jwt-access.strategy.ts
 ┃ ┃ ┣ 📜jwt-refresh.strategy.ts
 ┃ ┃ ┣ 📜jwt-social-google.strategy.ts
 ┃ ┃ ┣ 📜jwt-social-kakao.strategy.ts
 ┃ ┃ ┗ 📜jwt-social-naver.strategy.ts
 ┃ ┣ 📂graphql
 ┃ ┃ ┗ 📜schema.gql
 ┃ ┣ 📂libraries
 ┃ ┃ ┗ 📜utils.ts
 ┃ ┣ 📂types
 ┃ ┃ ┗ 📜context.ts
 ┃ ┗ 📜.DS_Store
 ┣ 📜.DS_Store
 ┣ 📜app.controller.ts
 ┣ 📜app.module.ts
 ┗ 📜main.ts
