import { PartialType } from '@nestjs/mapped-types';
import { CreateWishboneDto } from './create-wishbone.dto';

export class UpdateWishboneDto extends PartialType(CreateWishboneDto) {}
