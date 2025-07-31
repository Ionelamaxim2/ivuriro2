import React from "react";
import "./Modals.css";

export default function Modals({ show, onClose, type }) {
  return (
    <>
      {show && (
        <div className="modalOverlay6" onClick={onClose}>
          <div className="modalBox6" onClick={(e) => e.stopPropagation()}>
            <button className="closeModalBtn6" onClick={onClose}>
              ×
            </button>

            {/* PRIVACY POLICY */}
            {type === "privacy" && (
              <>
                <h1>Privacy Policy</h1>
                <p>
                  This privacy policy explains how the DrDali.ro clinic
                  collects, uses, and protects the personal information you
                  provide on our website. We are committed to protecting the
                  privacy of our visitors and patients and to complying with the
                  applicable data protection laws.
                </p>

                <h2>1. Information Collection</h2>
                <p>
                  We may collect the following types of information from you:
                </p>
                <ul>
                  <li>Full name</li>
                  <li>
                    Contact information, including email address and phone
                    number
                  </li>
                  <li>Demographic information such as postal code</li>
                  <li>
                    Other relevant details regarding consultation requests or
                    inquiries
                  </li>
                </ul>

                <h2>2. Use of Information</h2>
                <p>
                  The information we collect from you may be used for the
                  following purposes:
                </p>
                <ul>
                  <li>
                    To contact you regarding appointments or submitted inquiries
                  </li>
                  <li>To improve our services and website</li>
                  <li>
                    To send you periodic emails with relevant information and
                    special offers
                  </li>
                  <li>To personalize your experience on our website</li>
                </ul>

                <h2>3. Protecting Your Information</h2>
                <p>
                  We are committed to ensuring the security of your information.
                  To prevent unauthorized access or disclosure, we have
                  implemented appropriate physical, electronic, and managerial
                  procedures to safeguard the information we collect online.
                </p>

                <h2>4. Use of Cookies</h2>
                <p>
                  Our website uses cookies to distinguish users and improve user
                  experience. A cookie is a small file that asks for permission
                  to be placed on your computer's hard drive. Once you agree,
                  the file is added and the cookie helps analyze web traffic or
                  notifies you when you visit a particular site. Cookies allow
                  us to better respond to your needs by remembering your
                  preferences.
                </p>

                <h2>5. Links to Other Websites</h2>
                <p>
                  Our site may contain links to other websites of interest.
                  However, once you have used these links to leave our site, you
                  should note that we do not have any control over those
                  external websites. Therefore, we cannot be responsible for the
                  protection and privacy of any information you provide while
                  visiting such sites, and such sites are not governed by this
                  privacy policy. You should exercise caution and review the
                  applicable privacy policy of the site in question.
                </p>

                <h2>6. Controlling Your Personal Information</h2>
                <p>
                  You have the right to request details about the personal
                  information we hold about you. If you would like a copy of
                  this information or want to correct or delete any inaccurate
                  data, please contact us at:{" "}
                  <a href="mailto:[email protected]">[email protected]</a>.
                </p>

                <h2>7. Changes to This Privacy Policy</h2>
                <p>
                  DrDali.ro clinic may update this privacy policy periodically.
                  Any changes will be posted on this page and, if applicable,
                  notified to you via email. We recommend that you check this
                  page regularly to stay informed of any changes.
                </p>
                <p>
                  <strong>Last updated:</strong> July 25, 2025
                </p>
              </>
            )}

            {/* TERMS & CONDITIONS */}
            {type === "terms" && (
              <>
                <h1>Terms and Conditions</h1>

                <p>
                  Welcome to DrDali.ro. By accessing and using this website, you
                  agree to the terms and conditions outlined below. Please read
                  this information carefully before using our site.
                </p>

                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using this website, you agree to be bound by
                  these terms and conditions. If you do not agree, please do not
                  use our website.
                </p>

                <h2>2. Changes to Terms</h2>
                <p>
                  DrDali.ro reserves the right to modify these terms and
                  conditions at any time without prior notice. We recommend that
                  you check this page periodically to stay informed of any
                  updates. Continued use of our site after changes are posted
                  will constitute your acceptance of those changes.
                </p>

                <h2>3. Description of Services</h2>
                <p>
                  DrDali.ro provides medical information and services for
                  patients. The content on this site is for general
                  informational purposes only and does not constitute
                  professional medical advice. For diagnosis and specific
                  treatment, please consult a licensed medical professional.
                </p>

                <h2>4. Intellectual Property Rights</h2>
                <p>
                  All materials on this site, including but not limited to text,
                  images, graphics, logos, and software, are the property of
                  DrDali.ro or its licensors and are protected by copyright and
                  intellectual property laws. Unauthorized use of any materials
                  may violate these laws.
                </p>

                <h2>5. Website Usage</h2>
                <p>
                  <strong>Prohibited Content:</strong> You agree not to post or
                  transmit any illegal, threatening, defamatory, obscene,
                  pornographic, or otherwise unlawful material through our
                  website.
                </p>
                <p>
                  <strong>Responsible Use:</strong> You agree to use our website
                  only for lawful purposes and in a way that does not infringe
                  on the rights or restrict the use and enjoyment of the site by
                  others.
                </p>

                <h2>6. Limitation of Liability</h2>
                <p>
                  DrDali.ro shall not be liable for any direct, indirect,
                  incidental, special, or consequential damages arising from the
                  use or inability to use our website or any content provided
                  herein. This includes, but is not limited to, damages for loss
                  of profits, data, use, or other intangible losses.
                </p>

                <h2>7. Links to Other Websites</h2>
                <p>
                  Our site may contain links to other websites of interest.
                  DrDali.ro has no control over these external sites and is not
                  responsible for their content or privacy policies. Accessing
                  third-party sites is at your own risk.
                </p>

                <h2>8. Warranties and Responsibilities</h2>
                <p>
                  The information and services on this website are provided "as
                  is" without any warranties, express or implied. DrDali.ro does
                  not guarantee uninterrupted or error-free functionality, nor
                  that the site or its server are free from viruses or harmful
                  components.
                </p>

                <h2>9. Governing Law</h2>
                <p>
                  These terms and conditions are governed and interpreted
                  according to the laws of Romania. Any disputes arising from
                  these terms shall be resolved by the competent Romanian
                  courts.
                </p>

                <p>
                  <strong>Last updated:</strong> July 25, 2025
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
