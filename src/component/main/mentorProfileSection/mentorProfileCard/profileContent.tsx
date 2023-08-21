import Image from "next/image";
import {ProfileContentContainerDiv} from "@/component/main/mentorProfileSection/profileCard.style";
import {useEffect, useState} from "react";

interface propsType {
  nickname: string,
  major: string,
  company: string,
  field: string,
  techStack: string,
  imgUrl: any,
}
const ProfileContent = ({nickname, major, company, field, techStack, imgUrl}: propsType) => {
  const [techStackList, setTechStackList] = useState<any[]>();
  useEffect(() => {
    setTechStackList(techStack.split(", "))
  }, [techStack]);
  return (
    <ProfileContentContainerDiv>
      <div className="profileImageBox center">
        <Image src={imgUrl} alt="profileImage" fill sizes="50vw" style={{objectFit: "cover"}}/>
      </div>
      <div className="profileContentBox column gap3">
        <div className="marginLeft center gap10">
          <div className="textStyleNickname">{nickname}</div>
          <div className="line"/>
          <div>{major}</div>
        </div>
        <div className="marginBottom profileJobBox center">{company}</div>
        <div className="marginLeft">{field}</div>
        <div className="center gap12 textStyleTech marginLeft">
          {techStackList && techStackList.map((data: any, index: number) => {
            if (index < 4) {
              return <div key={index}>{data}</div>
            }
          })}
        </div>
      </div>
    </ProfileContentContainerDiv>
  );
}
export default ProfileContent;