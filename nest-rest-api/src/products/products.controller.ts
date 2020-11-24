import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Put,
  Body,
} from '@nestjs/common';
import { createProductDto } from './dto/create-product.dto';
import { updateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
  constructor(readonly productService: ProductsService) {}

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Product> {
    return this.productService.getByid(id);
  }

  @Post()
  //   @HttpCode(HttpStatus.CREATED)
  //   @Header('Cache-Control', 'none')
  create(@Body() createProductDto: createProductDto) {
    return this.productService.create(createProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }

  @Put(':id')
  update(@Body() updateProductDto: updateProductDto, @Param('id') id: string) {
    return this.productService.update(id, updateProductDto);
  }

  @Get()
  getAll(): Promise<Product[]> {
    return this.productService.getALl();
  }
}
