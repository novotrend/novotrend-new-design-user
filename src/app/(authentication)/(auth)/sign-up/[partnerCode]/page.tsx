import SignUpForm from "@/components/auth/SignUpForm";

export default function PartnerSignUpPage({ params }: { params: { partnerCode: string } }) {
  return <SignUpForm partnerCode={params.partnerCode} />;
}
