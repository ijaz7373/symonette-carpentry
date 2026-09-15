const { business } = require("../data");
const { head, header, footer, pageHero } = require("../components");

function render(base = "") {
  return `${head(
    {
      title: `Terms & Conditions | ${business.name}`,
      description: `Terms & Conditions for ${business.name}, including our SMS messaging program terms.`,
      path: "/terms",
    },
    base
  )}
<body>
${header("", base)}
<main id="main">
  ${pageHero({ title: "Terms & Conditions", crumb: "Terms & Conditions" }, base)}
  <section class="section">
    <div class="container legal-content">
      <p class="legal-updated">Last updated: January 2026</p>
      <p>These Terms &amp; Conditions govern your use of the ${business.name} website and services, including our SMS text messaging program. By using our website, requesting an estimate, or opting in to receive text messages, you agree to these terms.</p>

      <h2>Services</h2>
      <p>${business.name} provides residential carpentry services, including kitchen, bathroom, door, flooring, fence, and shed carpentry, throughout Hollywood, FL and the surrounding service area. Estimates are provided free of charge and are non-binding until a written agreement is signed by both parties.</p>

      <h2>SMS Messaging Program</h2>
      <p>These terms apply to all SMS messages sent and received as part of the messaging services provided by ${business.name}.</p>
      <ul>
        <li><strong>Consent:</strong> By providing your phone number through our website forms, paper forms, or verbally through customer service, you consent to receive text messages from ${business.name}.</li>
        <li><strong>Message Types &amp; Frequency:</strong> Messages may include appointment confirmations and reminders, quote follow-ups, promotional offers, and service updates. Frequency varies based on your interaction with our services.</li>
        <li><strong>Data Rates:</strong> Standard message and data rates may apply, depending on your mobile carrier plan.</li>
        <li><strong>Opt-Out:</strong> Reply STOP at any time to unsubscribe from SMS communications. Reply HELP for assistance.</li>
        <li><strong>Delivery:</strong> ${business.name} does not guarantee message delivery, which may be affected by carrier networks or device compatibility outside of our control.</li>
      </ul>

      <h2>User Obligations</h2>
      <p>You agree to provide accurate contact and project information, and to use our website and communication channels in compliance with applicable laws. You must not use our services to send offensive, illegal, or harassing communications.</p>

      <h2>Estimates &amp; Scheduling</h2>
      <p>Estimates are based on the information and property access available at the time of the visit. Final pricing may be adjusted if the scope of work changes once a project begins. Scheduling is arranged directly with our team following an accepted estimate.</p>

      <h2>Limitation of Liability</h2>
      <p>While we take pride in our craftsmanship, ${business.name} is not liable for delays caused by weather, material availability, permitting, or other circumstances outside our reasonable control.</p>

      <h2>Intellectual Property</h2>
      <p>All content on this website, including text, photos of completed projects, and branding, is the property of ${business.name} and may not be reproduced without permission.</p>

      <h2>Compliance with Laws</h2>
      <p>Use of our messaging service and website must comply with all relevant laws, including those relating to privacy, telecommunications, and commercial communications.</p>

      <h2>Changes to These Terms</h2>
      <p>${business.name} reserves the right to update these Terms &amp; Conditions at any time. Changes will be posted on this page.</p>

      <h2>Contact Information</h2>
      <p>For questions regarding these Terms &amp; Conditions, please contact us:</p>
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
