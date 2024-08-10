"use client";

import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        {/*`NextError`是默认的Next.js错误页面组件。它的类型定义需要一个“statusCode”道具。然而，由于App Router 不公开错误的状态代码，我们只需传递0来呈现通用错误消息。 */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}