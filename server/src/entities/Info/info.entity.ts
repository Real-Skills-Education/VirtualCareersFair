import Base, {IBaseConstructor} from 'entities/base.entity';
import {IInfoEntity, IInfoEntityMakeArgs} from 'interfaces/entities/IInfo.entity';

export interface IInfoConstructor extends IBaseConstructor {
  sanitizer: (text: string) => string;
}
export class Info extends Base{
  private _sanitizer: (text: string) => string;

  private _about_us: string | null;
  private _student_instructions: string | null;
  private _company_instructions: string | null;
  private _admin_instructions: string | null;

  constructor(args: IInfoConstructor) {
    super({id_gen: args.id_gen});
    this._sanitizer = args.sanitizer;
    this._about_us = null;
    this._student_instructions = null;
    this._company_instructions = null;
    this._admin_instructions = null;
  }
  get about_us() {
    return this._about_us;
  }
  get student_instructions() {
    return this._student_instructions;
  }
  get company_instructions() {
    return this._company_instructions;
  }
  get admin_instructions() {
    return this._admin_instructions;
  }
  async Make({
    _id,
    created_at,
    updated_at,
    about_us, 
    student_instructions, 
    company_instructions, 
    admin_instructions
  }: IInfoEntityMakeArgs) {
    this._id = _id ? _id : this._id;
    this._created_at = created_at ? created_at : this._created_at;
    this._updated_at = updated_at ? updated_at : this._updated_at;

    this._about_us = about_us ? this._sanitizer(about_us) : null;
    this._student_instructions = student_instructions ? this._sanitizer(student_instructions) : null;
    this._company_instructions = company_instructions ? this._sanitizer(company_instructions) : null;
    this._admin_instructions = admin_instructions ? this._sanitizer(admin_instructions) : null;
    return {
      _id: this._id,
      created_at: this._created_at,
      updated_at: this._updated_at,
      about_us: this._about_us,
      student_instructions: this._student_instructions,
      company_instructions: this._company_instructions,
      admin_instructions: this._admin_instructions,
    } as IInfoEntity;
  }
}

export default Info;