import React from "react";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={`bg-gray-200 py-14 border px-4 shadow-md z-10 flex flex-col items-center justify-center ${
        className ?? ""
      }`}
    >
      <div className="text-sm text-gray-600">
        <span className="font-bold">Tim D. Loan Specialist</span> © 2023 | ALL
        RIGHTS RESERVED | LOANS SUBJECT TO LENDER APPROVAL
      </div>
      <div className="text-sm text-gray-600">
        <Link href="#">
          <span className="text-blue-600 hover:text-blue-800">
            ADA STATEMENT
          </span>
        </Link>{" "}
        |
        <Link href="#">
          <span className="text-blue-600 hover:text-blue-800">
            TERMS & CONDITIONS
          </span>
        </Link>{" "}
        |
        <Link href="#">
          <span className="text-blue-600 hover:text-blue-800">
            PRIVACY POLICY
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
