import { useState } from "react";
import ContentWrap from "../common/ContentWrap";
import TextEditor from "../../components/TextEditor";

const ManageRegist = () => {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");

  return (
    <ContentWrap>
      <div className="content-title">게시글 등록 하기</div>
      <div className="inner-content">
        <div>등록양식 테스트</div>

        <TextEditor data={data2} setData={setData2} url="test" />
      </div>
    </ContentWrap>
  );
};

export default ManageRegist;
