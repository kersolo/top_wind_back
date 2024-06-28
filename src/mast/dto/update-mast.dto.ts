import { PartialType } from '@nestjs/mapped-types';
import { CreateMastDto } from './create-mast.dto';

export class UpdateMastDto extends PartialType(CreateMastDto) {}
