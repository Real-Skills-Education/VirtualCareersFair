import {ILogin} from 'interfaces/IAuthentication';
import {IInviteDbAccess, IStudentDbAccess, ICompanyDbAccess, IAdminDbAccess} from 'interfaces/dbaccess'

import {makeInvite, makeAdmin, makeCompany, makeStudent} from 'entities'
import {IInviteEntity, IAdminEntity, IStudentEntity, ICompanyEntity} from 'interfaces/entities'
import {IAuthorizationTypes} from 'interfaces/IAuthorization'
import {token_gen} from 'utils/auth';
import {hash, check} from 'utils/hash';

interface IDbs {
  adminDb: IAdminDbAccess;
  companyDb: ICompanyDbAccess;
  studentDb: IStudentDbAccess;
}

const makeLoginUser = ({adminDb, companyDb, studentDb}: IDbs) => {
  const loginUser: ILogin = async (email: string, password: string) => {
    // working
    let authorization: IAuthorizationTypes;
    let admin_res = (await adminDb.findByEmail({email}) as IAdminEntity);
    let company_res = (await companyDb.findByEmail({email}) as ICompanyEntity);
    let student_res = (await studentDb.findByEmail({email}) as IStudentEntity);

    if (admin_res) {
      if (!(await check(password, admin_res.password))) {
        throw new Error('Error logging in user, invalid password.');
      }
      authorization = 'ADMIN';
    } else if (company_res) {
      if (!(await check(password, company_res.password))) {
        throw new Error('Error logging in user, invalid password.');
      }
      authorization = 'COMPANY';
    } else if (student_res) {
      if (!(await check(password, student_res.password))) {
        throw new Error('Error logging in user, invalid password.');
      }
      authorization = 'STUDENT';
    } else {
      throw new Error("Error logging in user, could not find existing user.");
    }
    return {
      user_token: token_gen({email, authorization})
    }
  }
  return loginUser;
}

export default makeLoginUser;