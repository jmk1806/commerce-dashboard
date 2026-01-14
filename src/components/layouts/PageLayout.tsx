import styled from "@emotion/styled";
import { colors } from "@/styles";

export const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 16px 24px;
  background: ${colors.gray900};
  color: white;

  h1 {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const Main = styled.main`
  flex: 1;
  padding: 24px;
`;

export const Section = styled.section`
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.gray800};
  margin-bottom: 12px;
`;

export const Placeholder = styled.div`
  padding: 32px;
  background: ${colors.gray100};
  border-radius: 4px;
  text-align: center;
  color: ${colors.gray500};
`;
