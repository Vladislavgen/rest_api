import { Injectable } from '@nestjs/common';
import { createProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';
import { updateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getALl(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getByid(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  async create(productDto: createProductDto): Promise<Product> {
    const newProduct = new this.productModel(productDto);
    return newProduct.save();
  }
  async remove(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }
  async update(id: string, productDto: updateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, productDto, { new: true });
  }
}
