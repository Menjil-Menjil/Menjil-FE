import styled from "@emotion/styled";

const FooterSection = styled.footer`
  width: 100%;
  height: 70px;
  margin: 0 auto;
  border-top: 1px solid #e2e2e2;
  .footerText {
    margin-left: 200px;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      {" "}
      <div className="footerText">Copyright &copy;팀 슈퍼주니어</div>
    </FooterSection>
  );
};

export default Footer;
