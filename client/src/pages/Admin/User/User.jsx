import * as S from './User.styles';
import Title from '../../../components/common/Title/Title';
import Table from '../../../components/common/Table/Table';

const title = ['닉네임', '이메일', '주문 수', '주문내역'];
const userData = [
  ['유저1', 'test@gmail.com', '2', '삭제'],
  ['유저2', 'test@gmail.com', '2', '삭제'],
];

function User() {
  return (
    <S.Container>
      <Title text="유저 관리" isAdmin={true} />
      <S.UserQuantity>
        <span>{userData.length}</span>
        <p>명의 유저가 있습니다.</p>
      </S.UserQuantity>
      <Table title={title} data={userData} />
    </S.Container>
  );
}

export default User;
