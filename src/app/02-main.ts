import { ProductMemoryService } from "./services/product.memory.service";

const productService = new ProductMemoryService()


productService.create(
  {
    title: "product1",
    price: 100,
    description: "a",
    categoryId: 12,
    images: []
  }
)

const products = productService.getAll()

const productId = products[0].id

productService.update(productId, {
  title: "aaa"
})

const rta = productService.findOne(productId)

console.log(rta);
