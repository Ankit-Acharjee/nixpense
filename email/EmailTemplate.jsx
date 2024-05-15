import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  // Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";



export const EmailTemplate = ({borrowerName,lenderName,loanAmount, borrowedDate,dueDate}) => {

  return (
    <Html>
      <Head />
      <Preview>Debt Ticket</Preview>
      <Body style={main}>
        <Container>

          <Section style={content}>
            {/* <Row>
              <Img
                style={image}
                width={620}
                src={`/assets/email-header.png`}
              />
            </Row> */}

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {borrowerName},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  You got a debt ticket from {lenderName}
                </Heading>

                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>The amount of the debt is {loanAmount} </b>
                </Text>
                <Text style={paragraph}>
                  <b>The debt was taken on: {borrowedDate} </b>
                  <b>The due date is {dueDate}</b>
                </Text>
                
                {/* <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Location: </b>
                  {loginLocation}
                </Text>
                <Text
                  style={{
                    color: "rgb(0,0,0, 0.5)",
                    fontSize: 14,
                    marginTop: -5,
                  }}
                >
                  *Approximate geographic location based on IP address:
                  {loginIp}
                </Text> */}

                <Text style={paragraph}>
                  If the information is correct, you may clear the due amount within {dueDate}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  If this wasn&apos;t you or if the information is incorrect please visit our support page.
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={containerButton} colSpan={2}>
                <Text>Want to know more about us?</Text>
                <Button style={button}>Visit our Page</Button>
              </Column>
            </Row>
          </Section>

          {/* <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src={`/assets/email-footer.png`}
            />
          </Section> */}

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | Nixpense Inc, Kolkata, India | All Rights Reserved
          </Text>
        </Container>
      </Body>
    </Html>
  );
};


export default EmailTemplate;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
