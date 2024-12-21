import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-56 flex-shrink-0">
            <div className="sticky top-4 bg-gray-50 p-3 rounded">
              <h2 className="text-base md:text-lg mb-1.5 text-left leading-snug tracking-wide">
                Table of Contents
              </h2>
              <ul className="space-y-1 text-xs">
                <li>
                  <a href="#license" className="text-blue-600 hover:underline">
                    License
                  </a>
                </li>
                <li>
                  <a href="#comments" className="text-blue-600 hover:underline">
                    User Comments
                  </a>
                </li>
                <li>
                  <a
                    href="#hyperlinking"
                    className="text-blue-600 hover:underline"
                  >
                    Hyperlinking to our Content
                  </a>
                </li>
                <li>
                  <a
                    href="#liability"
                    className="text-blue-600 hover:underline"
                  >
                    Limitation of Liability
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-blue-600 hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Main Content */}
          <div className="flex-grow">
            <h1 className="text-base md:text-lg mb-1.5 text-left leading-snug tracking-wide">
              Terms and Conditions
            </h1>

            <div className="space-y-4 text-xs leading-relaxed">
              <p>
                Welcome to SoftTech Solution! These terms and conditions outline
                the rules and regulations for the use of SoftTech Solution's
                Site/Application. By accessing this Site/Application, we assume
                you accept these terms and conditions in full. Do not continue
                to use SoftTech Solution's Site/Application if you do not accept
                all of the terms and conditions stated on this page.
              </p>

              <section>
                <h2 className="text-base md:text-lg mb-1.5 text-left leading-snug tracking-wide">
                  License
                </h2>
                <p>
                  Unless otherwise stated, SoftTech Solution and/or its
                  licensors own the intellectual property rights for all
                  material on the Site/Application. All intellectual property
                  rights are reserved. You may view and/or print pages from the
                  Site/Application for your own personal use subject to
                  restrictions set in these terms and conditions.
                </p>
                <p>You must not:</p>
                <ul className="list-disc pl-6 mt-1.5 space-y-1">
                  <li>Republish material from the Site/Application</li>
                  <li>
                    Sell, rent, or sub-license material from the
                    Site/Application
                  </li>
                  <li>
                    Reproduce, duplicate, or copy material from the
                    Site/Application
                  </li>
                  <li>
                    Redistribute content from SoftTech Solution (unless content
                    is specifically made for redistribution)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-base md:text-lg mb-1.5 text-left leading-snug tracking-wide">
                  User Comments
                </h2>
                <p>
                  Certain parts of this Site/Application offer the opportunity
                  for users to post and exchange opinions, information,
                  material, and data ('Comments'). SoftTech Solution does not
                  screen, edit, publish or review Comments prior to their
                  appearance on the Site/Application. Comments do not reflect
                  the views or opinions of SoftTech Solution, its agents, or
                  affiliates.
                </p>
                <p>
                  SoftTech Solution reserves the right to monitor all Comments
                  and to remove any Comments which it considers, in its absolute
                  discretion, to be inappropriate, offensive, or otherwise in
                  breach of these Terms and Conditions.
                </p>
              </section>

              <section>
                <h2 className="text-base md:text-lg mb-1.5 text-left leading-snug tracking-wide">
                  Hyperlinking to our Content
                </h2>
                <p>
                  The following organizations may link to our Site/Application
                  without prior written approval:
                </p>
                <ul className="list-disc pl-6 mt-1.5 space-y-1">
                  <li>Government agencies</li>
                  <li>Search engines</li>
                  <li>News organizations</li>
                  <li>Online directory distributors</li>
                  <li>Systemwide Accredited Businesses</li>
                </ul>
                <p>
                  These organizations may link to our home page, to
                  publications, or to other Site/Application information as long
                  as the link: (a) is not misleading; (b) does not falsely imply
                  sponsorship, endorsement, or approval; and (c) fits within the
                  context of the linking party's site.
                </p>
              </section>

              <section>
                <h2 className="text-base md:text-lg mb-1.5 text-left leading-snug tracking-wide">
                  Limitation of Liability
                </h2>
                <p>
                  In no event shall SoftTech Solution, nor any of its officers,
                  directors, and employees, be liable for anything arising out
                  of or in any way connected with your use of this
                  Site/Application, whether such liability is under contract,
                  tort, or otherwise. SoftTech Solution shall not be liable for
                  any indirect, consequential, or special liability arising out
                  of or in any way related to your use of this Site/Application.
                </p>
              </section>

              <section className="mt-6 pt-3 border-t border-gray-200">
                <h2 className="font-semibold text-sm mb-1.5 text-left">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about these Terms and Conditions,
                  please contact us at:
                </p>
                <div className="mt-2 space-y-0.5">
                  <p className="font-semibold">SoftTech Technologies</p>
                  <p>
                    Address: Plot No- 790/1339, Sum Hostpital rd, Shampur,
                    Bhubaneswar PIN – 751029
                  </p>
                  <p>Email: info@softtechsolution.com</p>
                  <p>URL: www.softtechsolution.com</p>
                </div>
              </section>

              <p className="text-xs text-gray-600 mt-4">
                This document was last updated on December 21, 2024.
              </p>
            </div>
          </div>

          {/* Table of Contents - Right Side */}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
