
import Section from "../../components/Section"

function Post() {
  const data = [
    { rate: 5, review: 'abc' },
    { rate: 4, review: 'abc' },
    { rate: 3, review: 'abc' },
    { rate: 5, review: 'abc' },
    { rate: 2, review: 'abc' },
    { rate: 4, review: 'abc' },
  ];
  const rateCounts = [0, 0, 0, 0, 0];
  for (let i = 0; i < data.length; i++) {
    const rate = data[i].rate;
    if (rate >= 1 && rate <= 5) {
      rateCounts[rate - 1]++; // Tăng số lần xuất hiện tương ứng với tỷ lệ
    }
  }
  console.log(rateCounts)
  
  return(
    <>
      <Section title={'Về chúng tôi'}/>
    </>
  )
}
export default Post;

