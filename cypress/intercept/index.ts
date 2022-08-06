import { Method } from "axios";

export const interceptAPI = ({
  method,
  apiUrl,
  statusCode,
  body,
  alias,
}: {
  method: Method;
  apiUrl: string;
  statusCode: number;
  body: any;
  alias?: string;
}) => {
  cy.intercept(method, apiUrl, {
    statusCode,
    body,
  }).as(alias ? alias : "test");
};
