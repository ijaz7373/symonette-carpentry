const { business } = require("../data");
const { head, header, footer, pageHero } = require("../components");

function render(base = "") {
  return `${head(
    {
      title: `Privacy Policy | ${business.name}`,
      description: `Privacy Policy for ${business.name} — how we collect, use, and protect your personal information.`,
      path: "/privacy-policy",
    },
    base
  )}
<body>
${header("", base)}
<main id="main">
  ${pageHero({ title: "Privacy Policy", crumb: "Privacy Policy" }, base)}
  <section class="section">
    <div class="container legal-content">
      <p class="legal-updated">Last updated: January 2026</p>
      <p>This Privacy Policy describes how ${business.name} ("Company," "we," "us," or "our") collects, uses, and discloses your information when you visit our website, respond to our advertisements, or otherwise interact with our services. By using our services, you agree to the collection and use of information in accordance with this policy.</p>

      <h2>Definitions</h2>
      <ul>
        <li><strong>Company</strong> refers to ${business.name}, located at ${business.addressLine1}, ${business.addressLine2}.</li>
        <li><strong>Service</strong> refers to our website, advertisements, and related communications.</li>
        <li><strong>Personal Data</strong> means any information that relates to an identified or identifiable individual.</li>
        <li><strong>Device</strong> means any device that can access the Service, such as a computer, cellphone, or tablet.</li>
        <li><strong>You</strong> means the individual accessing or using the Service, or the company or legal entity on whose behalf that individual is acting.</li>
      </ul>

      <h2>Information We Collect</h2>
      <p>While using our Service, we may ask you to provide certain personally identifiable information that can be used to contact or identify you, including:</p>
      <ul>
        <li>First and last name</li>
        <li>Phone number</li>
        <li>Email address</li>
        <li>Service address, city, or general location</li>
        <li>Any other information you choose to share, such as project details or preferences</li>
      </ul>
      <p>We may also automatically collect limited usage data when you visit our website, such as pages viewed and time spent on the site, to help us understand and improve the Service.</p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To provide and maintain our Service, including scheduling estimates and completing requested carpentry work</li>
        <li>To contact you by phone, email, or text message regarding your inquiry, appointment, or project</li>
        <li>To respond to inquiries, quote requests, and customer support needs</li>
        <li>To send appointment confirmations, reminders, and service-related updates</li>
        <li>To improve our website and services based on how they are used</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>SMS &amp; Text Messaging</h2>
      <p>If you provide your phone number and consent to receive text messages, ${business.name} may send you marketing messages, appointment confirmations and reminders, and service-related follow-ups. Message and data rates may apply, and frequency may vary. You may reply STOP at any time to opt out of text messages, or HELP for assistance. Consent to receive texts is never a condition of purchasing our services.</p>

      <h2>Sharing Your Information</h2>
      <p>We do not sell your personal information. We may share information with trusted service providers who help us operate our business (such as scheduling, communications, or payment tools), and only to the extent necessary for them to perform those services on our behalf. We may also disclose information if required by law or to protect the rights, property, or safety of ${business.name}, our customers, or others.</p>

      <h2>Data Retention</h2>
      <p>We retain your personal data only for as long as necessary to fulfill the purposes described in this policy, including to comply with legal, accounting, or reporting obligations.</p>

      <h2>Data Security</h2>
      <p>We take reasonable measures to protect your personal information, but no method of electronic transmission or storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.</p>

      <h2>Your Rights</h2>
      <p>You may request access to, correction of, or deletion of your personal information by contacting us using the details below. You may also opt out of marketing communications at any time.</p>

      <h2>Children's Privacy</h2>
      <p>Our Service is not directed to individuals under the age of 18, and we do not knowingly collect personal information from children.</p>

      <h2>Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>

      <h2>Contact Us</h2>
      <p>If you have questions about this Privacy Policy, please contact us:</p>
      <ul>
        <li>Phone: <a href="${business.phoneHref}">${business.phone}</a></li>
        <li>Email: <a href="${business.emailHref}">${business.email}</a></li>
        <li>Address: ${business.addressLine1}, ${business.addressLine2}</li>
      </ul>
    </div>
  </section>
</main>
${footer(base)}
`;
}

module.exports = { render };
