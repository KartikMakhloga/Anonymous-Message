import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import { verify } from "crypto";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "user@gmail.com",
      subject: "Mystry message | Verify your email address",
      react: VerificationEmail({
        username,
        otp: verifyCode,
      }),
    });

    return {
      success: true,
      message: "Verification email sent",
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to send verification email",
    };
  }
}
