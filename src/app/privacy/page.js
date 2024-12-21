import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-56 flex-shrink-0">
            <div className="sticky top-4 bg-gray-50 p-3 rounded">
              <h2 className="font-semibold text-sm mb-2">Table of Contents</h2>
              <ul className="space-y-1 text-xs">
                <li><a href="#personal-info" className="text-blue-600 hover:underline">Personal Identification Information</a></li>
                <li><a href="#non-personal-info" className="text-blue-600 hover:underline">Non-personal Identification Information</a></li>
                <li><a href="#cookies" className="text-blue-600 hover:underline">Web Browser Cookies</a></li>
                <li><a href="#information-usage" className="text-blue-600 hover:underline">How we use collected information</a></li>
                <li><a href="#protection" className="text-blue-600 hover:underline">How we protect your information</a></li>
                <li><a href="#sharing" className="text-blue-600 hover:underline">Sharing your personal information</a></li>
                <li><a href="#third-party" className="text-blue-600 hover:underline">Third party websites</a></li>
                <li><a href="#advertising" className="text-blue-600 hover:underline">Advertising</a></li>
                <li><a href="#changes" className="text-blue-600 hover:underline">Changes to this privacy policy</a></li>
                <li><a href="#acceptance" className="text-blue-600 hover:underline">Your acceptance of these terms</a></li>
                <li><a href="#contact" className="text-blue-600 hover:underline">Contacting us</a></li>
              </ul>
            </div>
          </div>
          {/* Main Content */}
          <div className="flex-grow">
            <h1 className="text-xl md:text-lg mb-1.5 text-left leading-snug tracking-wide">Privacy Policy</h1>
            
            <div className="space-y-4 text-xs leading-relaxed">
              <p>
                This Privacy Policy governs the manner in which SoftTech Solution collects, uses, maintains and discloses information collected from users (each, a "User") of the softtechsolution.com website and/or any other website/application owned and operated by SoftTech Solution ("Site/Application"). This privacy policy applies to the Site/Application and all products and services offered by SoftTech Solution.
              </p>

              <section id='personal-info'>
                <h2 className="text-base md:text-lg mb-1.5 text-left leading-snug tracking-wide">Personal Identification Information</h2>
                <p>
                  We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, place an order, fill out a form, and in connection with other activities, services, features or resources we make available on our Site/Application. Users may be asked for, as appropriate, name, email address, mailing address, phone number. Users may, however, visit our Site/Application anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us.
                </p>
              </section>

              <section>
                <h2 className="text-base md:text-lg mb-1.5 text-left leading-snug tracking-wide">Non-personal Identification Information</h2>
                <p>
                  We may collect non-personal identification information about Users whenever they interact with our Site/Application. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site/Application, such as the operating system and the Internet service providers utilized and other similar information.
                </p>
              </section>

              <section>
                <h2 className="text-base md:text-lg mb-1.5 text-left leading-snug tracking-wide">Web Browser Cookies</h2>
                <p>
                  Our Site/Application may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site/Application may not function properly.
                </p>
              </section>

              <section>
                <h2 className="ftext-base md:text-lg mb-1.5 text-left leading-snug tracking-wide">How we use collected information</h2>
                <p>SoftTech Solution collects and uses Users personal information for the following purposes:</p>
                <ul className="list-disc pl-6 mt-1.5 space-y-1">
                  <li>To personalize user experience: We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site/Application.</li>
                  <li>To improve our Site/Application: We continually strive to improve our website offerings based on the information and feedback we receive from you.</li>
                  <li>To improve customer service: Your information helps us to more effectively respond to your customer service requests and support needs.</li>
                  <li>To process transactions: We may use the information Users provide about themselves when placing an order only to provide service to that order.</li>
                  <li>To send periodic emails: The email address Users provide for order processing, will only be used to send them information and updates pertaining to their order.</li>
                </ul>
              </section>

              {/* Additional sections continue with the same pattern... */}

              <section className="mt-6 pt-3 border-t border-gray-200">
                <h2 className="text-base md:text-lg mb-1.5 text-left leading-snug tracking-wide">Contacting us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <div className="mt-2 space-y-0.5">
                  <p className="font-semibold">SoftTech Technologies</p>
                  <p>Address: Plot No- 790/1339, Sum Hostpital rd, Shampur, Bhubaneswar PIN – 751029</p>
                  <p>Email: info@softtechsolution.com</p>
                  <p>URL: www.softtechsolution.com</p>
                </div>
              </section>

              <p className="text-xs text-gray-600 mt-4">
                This document was last updated on December 20, 2024.
              </p>
            </div>
          </div>

          {/* Table of Contents - Right Side */}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;