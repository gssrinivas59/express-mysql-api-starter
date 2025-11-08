

//.replace(/\n\s*/g, '');

module.exports = {
    termsConditionsHtml: () => {

        return `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Terms & Conditions - IronBhai</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 16px;
                line-height: 1.6;
                background-color: #f9f9f9;
                color: #333;
            }
            .container {
                max-width: 800px;
                margin: auto;
                background: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 8px rgba(0,0,0,0.05);
            }
            h1 {
                font-size: 1.5rem;
                text-align: center;
                margin-bottom: 6px;
            }
            .last-updated {
                font-size: 0.9rem;
                text-align: center;
                color: #666;
                margin-bottom: 20px;
            }
            h2 {
                font-size: 1.1rem;
                margin-top: 20px;
                color: #444;
            }
            p, li {
                font-size: 0.95rem;
            }
            ul {
                padding-left: 18px;
            }
            @media (max-width: 600px) {
                body {
                    padding: 12px;
                }
                .container {
                    padding: 16px;
                }
                h1 {
                    font-size: 1.3rem;
                }
                h2 {
                    font-size: 1rem;
                }
                p, li {
                    font-size: 0.9rem;
                }
            }
        </style>
        </head>
        <body>
        <div class="container">
            <h1>Terms & Conditions</h1>
        
            <p>By using IronBhai's services (laundry, ironing, dry cleaning, saree rolling, and related offerings), you agree to the following Terms & Conditions:</p>
        
            <h2>1. Service Scope</h2>
            <ul>
                <li>Services are provided as per the options selected in the IronBhai app or via our authorized channels.</li>
                <li>We reserve the right to refuse or cancel any order at our discretion.</li>
            </ul>
        
            <h2>2. Orders & Pickup</h2>
            <ul>
                <li>Orders must be placed through our official app, website, or customer service channels.</li>
                <li>Pickup and delivery timings are based on slot availability and may be rescheduled in case of operational constraints.</li>
            </ul>
        
            <h2>3. Pricing & Payment</h2>
            <ul>
                <li>Prices are listed in the app and may vary by service, location, or promotions.</li>
                <li>Payments must be completed via the app's supported methods before delivery, unless Cash on Delivery (COD) is chosen.</li>
            </ul>
        
            <h2>4. Garment Handling & Liability</h2>
            <ul>
                <li>We take utmost care of all items but are not responsible for pre-existing damage, color fading, or wear and tear.</li>
                <li>Shrinkage or damage due to manufacturer's defect or poor fabric quality is not our liability.</li>
                <li>In case of loss or damage solely due to our negligence, compensation will not exceed 5 times the service cost of the affected item.</li>
            </ul>
        
            <h2>5. Uncollected Items</h2>
            <ul>
                <li>Items not collected/delivered within 30 days from the scheduled delivery date will be considered abandoned and may be donated/disposed without further notice.</li>
            </ul>
        
            <h2>6. Cancellations & Refunds</h2>
            <ul>
                <li>Orders can be cancelled before pickup.</li>
                <li>Refunds (if applicable) will be processed as per our refund policy within 7-10 business days.</li>
            </ul>
        
            <h2>7. Customer Responsibilities</h2>
            <ul>
                <li>Check all pockets for valuables before handing over garments.</li>
                <li>Provide accurate contact details and delivery address.</li>
                <li>Ensure someone is available at the delivery location during the scheduled time.</li>
            </ul>
        
            <h2>8. Service Limitations</h2>
            <ul>
                <li>We do not guarantee removal of all stains.</li>
                <li>Certain delicate fabrics may be processed only after customer consent.</li>
            </ul>
        
            <h2>9. Promotions & Discounts</h2>
            <ul>
                <li>Offers and coupons are subject to change or withdrawal without prior notice.</li>
                <li>Only one promotional offer can be used per order unless stated otherwise.</li>
            </ul>
        
            <h2>10. Privacy & Data Use</h2>
            <ul>
                <li>Customer data will be used only for service delivery, communication, and marketing (if opted in), as per our Privacy Policy.</li>
            </ul>
        
            <h2>11. Dispute Resolution</h2>
            <ul>
                <li>Any disputes shall be resolved amicably. If unresolved, they will be subject to the jurisdiction of Hyderabad, Telangana courts.</li>
            </ul>
        </div>
        </body>
        </html>`
        .trim()
        .replace(/\n/g, ' ')
        .replace(/\s\s+/g, ' ');
    },
    privacyPolicyHtml: () => {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Privacy Policy - IronBhai</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 16px;
                line-height: 1.6;
                background-color: #f9f9f9;
                color: #333;
            }
            .container {
                max-width: 800px;
                margin: auto;
                background: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 8px rgba(0,0,0,0.05);
            }
            h1 {
                font-size: 1.5rem;
                text-align: center;
                margin-bottom: 6px;
            }
            .last-updated {
                font-size: 0.9rem;
                text-align: center;
                color: #666;
                margin-bottom: 20px;
            }
            h2 {
                font-size: 1.1rem;
                margin-top: 20px;
                color: #444;
            }
            p, li {
                font-size: 0.95rem;
            }
            ul {
                padding-left: 18px;
            }
            @media (max-width: 600px) {
                body {
                    padding: 12px;
                }
                .container {
                    padding: 16px;
                }
                h1 {
                    font-size: 1.3rem;
                }
                h2 {
                    font-size: 1rem;
                }
                p, li {
                    font-size: 0.9rem;
                }
            }
        </style>
        </head>
        <body>
        <div class="container">
            <h1>Privacy Policy</h1>
        
            <p>IronBhai is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.</p>
        
            <h2>1. Information We Collect</h2>
            <ul>
                <li>Personal details: Name, phone number, email, address.</li>
                <li>Order details: Service type, pickup/delivery location, payment information.</li>
                <li>Device & usage data: IP address, device type, app usage patterns, cookies.</li>
            </ul>
        
            <h2>2. How We Use Your Information</h2>
            <ul>
                <li>Process and deliver your orders.</li>
                <li>Communicate updates, offers, and support.</li>
                <li>Improve our services and app functionality.</li>
                <li>Comply with legal and regulatory requirements.</li>
            </ul>
        
            <h2>3. Data Sharing</h2>
            <ul>
                <li>We do not sell your personal data.</li>
                <li>We may share information with service partners for pickup, delivery, and payment processing.</li>
                <li>We may share with legal authorities if required by law or to protect our rights.</li>
            </ul>
        
            <h2>4. Data Security</h2>
            <ul>
                <li>We use encryption, secure servers, and access controls to protect your data.</li>
                <li>While we take reasonable steps to safeguard information, no system is 100% secure.</li>
            </ul>
        
            <h2>5. Cookies & Tracking</h2>
            <ul>
                <li>We may use cookies and analytics tools to enhance your experience.</li>
                <li>You can disable cookies through your browser/app settings.</li>
            </ul>
        
            <h2>6. Your Rights</h2>
            <ul>
                <li>Access, update, or delete your personal data.</li>
                <li>Opt out of marketing communications anytime.</li>
                <li>Request details of the data we hold about you.</li>
            </ul>
        
            <h2>7. Data Retention</h2>
            <ul>
                <li>We retain your data only as long as necessary for providing services and complying with legal obligations.</li>
            </ul>
        
            <h2>8. Third-Party Links</h2>
            <ul>
                <li>Our app/website may contain links to other sites. We are not responsible for their privacy practices.</li>
            </ul>
        
            <h2>9. Policy Updates</h2>
            <ul>
                <li>We may update this policy from time to time. The updated version will be posted on our app/website with a revised date.</li>
            </ul>
        
            <h2>10. Contact Us</h2>
            <ul>
                <li>📧 Email: <a href="mailto:support@ironbhai.com">support@ironbhai.com</a></li>
                <li>📞 Phone: +91 8688206969</li>
            </ul>
        </div>
        </body>
        </html>`
        .trim()
        .replace(/\n/g, ' ')
        .replace(/\s\s+/g, ' ');
    },
    aboutUsHtml: () => {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Us - IronBhai</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 16px;
                line-height: 1.6;
                background-color: #f9f9f9;
                color: #333;
            }
            .container {
                max-width: 800px;
                margin: auto;
                background: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 8px rgba(0,0,0,0.05);
            }
            h1 {
                font-size: 1.5rem;
                text-align: center;
                margin-bottom: 20px;
            }
            h2 {
                font-size: 1.1rem;
                margin-top: 20px;
                color: #444;
            }
            p, li {
                font-size: 0.95rem;
            }
            ul {
                padding-left: 18px;
            }
            a {
                color: #0066cc;
                text-decoration: none;
            }
            a:hover {
                text-decoration: underline;
            }
            @media (max-width: 600px) {
                body {
                    padding: 12px;
                }
                .container {
                    padding: 16px;
                }
                h1 {
                    font-size: 1.3rem;
                }
                h2 {
                    font-size: 1rem;
                }
                p, li {
                    font-size: 0.9rem;
                }
            }
        </style>
        </head>
        <body>
        <div class="container">
            <h1>About Us</h1>
        
            <p>At IronBhai, we make laundry, ironing, dry cleaning, and saree rolling services easy, reliable, and affordable for busy people. Our mission is simple — to save your time and keep your clothes looking their best.</p>
        
            <p>We combine professional garment care with modern convenience. With just a few taps on the IronBhai app, you can schedule pickups and deliveries right at your doorstep. Our trained team ensures that every item is handled with care, using the right techniques for each fabric.</p>
        
            <h2>Why Choose IronBhai?</h2>
            <ul>
                <li><strong>Doorstep Service:</strong> Hassle-free pickup & delivery.</li>
                <li><strong>Premium Quality:</strong> Expert ironing, cleaning, and finishing.</li>
                <li><strong>Affordable Pricing:</strong> Transparent rates with no hidden charges.</li>
                <li><strong>Time-Saving:</strong> Focus on what matters while we handle your laundry.</li>
                <li><strong>Eco-Friendly:</strong> Sustainable cleaning practices where possible.</li>
            </ul>
        
            <p>We are proud to serve our customers with a blend of traditional care and modern efficiency — making IronBhai your trusted clothing care partner.</p>
        
            <h2>Contact Information</h2>
            <ul>
                <li>📍 <strong>Head Office:</strong> Hyderabad, Telangana</li>
                <li>🌐 <strong>Website:</strong> <a href="https://www.ironbhai.com" target="_blank">www.ironbhai.com</a></li>
                <li>📧 <strong>Email:</strong> <a href="mailto:support@ironbhai.com">support@ironbhai.com</a></li>
            </ul>
        </div>
        </body>
        </html>`
        .trim()
        .replace(/\n/g, ' ')
        .replace(/\s\s+/g, ' ');
    },
    refundPolicyHtml: () => {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Refund Policy</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 15px;
                background-color: #fff;
                color: #333;
                line-height: 1.6;
            }
            h1 {
                font-size: 1.5rem;
                text-align: center;
                margin-bottom: 10px;
            }
            h2 {
                font-size: 1.2rem;
                margin-top: 20px;
                color: #222;
            }
            ul {
                padding-left: 20px;
            }
            li {
                margin-bottom: 8px;
            }
            .contact {
                margin-top: 20px;
                font-weight: bold;
            }
            @media (max-width: 600px) {
                body {
                    padding: 10px;
                }
                h1 {
                    font-size: 1.3rem;
                }
                h2 {
                    font-size: 1.1rem;
                }
            }
        </style>
        </head>
        <body>
        
        <h1>Refund Policy</h1>
        
        <h2>1. Eligibility for Refund</h2>
        <ul>
            <li>An order is cancelled before pickup for prepaid bookings.</li>
            <li>The service is not delivered due to operational reasons from our side.</li>
            <li>There is proven loss or damage to garments caused solely by IronBhai's negligence.</li>
        </ul>
        
        <h2>2. Non-Refundable Cases</h2>
        <ul>
            <li>The garments have already been processed.</li>
            <li>There is damage due to pre-existing defects, color bleeding, or poor fabric quality.</li>
            <li>The order was placed under a non-refundable promotional offer.</li>
        </ul>
        
        <h2>3. Refund Process</h2>
        <ul>
            <li>Refunds (if approved) will be issued to the original payment method only.</li>
            <li>Processing time: 7-10 business days from approval date.</li>
        </ul>
        
        <h2>4. Partial Refunds</h2>
        <p>In case of partial service issues, refunds will be calculated proportionately based on the affected item's service charges.</p>
        
        <h2>5. Contact for Refund Requests</h2>
        <p class="contact">📧 Email: <a href="mailto:support@ironbhai.com">support@ironbhai.com</a><br>
        📞 Phone: +91 8688206969</p>
        
        </body>
        </html>`
        .trim()
        .replace(/\n/g, ' ')
        .replace(/\s\s+/g, ' ');
    },
    cancellationPolicyHtml: () => {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cancellation Policy</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 15px;
                background-color: #f9f9f9;
                color: #333;
                line-height: 1.6;
            }
            .container {
                max-width: 800px;
                margin: auto;
                background: #fff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,0.05);
            }
            h1 {
                font-size: 22px;
                color: #222;
                text-align: center;
                margin-bottom: 10px;
            }
            h2 {
                font-size: 18px;
                color: #444;
                margin-top: 20px;
            }
            ul {
                padding-left: 20px;
            }
            li {
                margin-bottom: 8px;
            }
            .contact {
                margin-top: 15px;
                font-weight: bold;
            }
            @media (max-width: 600px) {
                body {
                    padding: 10px;
                }
                .container {
                    padding: 15px;
                }
                h1 {
                    font-size: 20px;
                }
                h2 {
                    font-size: 16px;
                }
            }
        </style>
        </head>
        <body>
        <div class="container">
            <h1>Cancellation Policy</h1>
        
            <h2>1. Order Cancellation by Customer</h2>
            <ul>
                <li>You may cancel your order before the scheduled pickup time via the IronBhai app or by contacting customer support.</li>
                <li>If the pickup process has already started, cancellation may not be possible, and the service charge may still apply.</li>
            </ul>
        
            <h2>2. Order Cancellation by IronBhai</h2>
            <p>We may cancel your order in cases such as:</p>
            <ul>
                <li>Service unavailability in your area.</li>
                <li>Incorrect or incomplete order details.</li>
                <li>Unforeseen operational issues.</li>
                <li>Violation of our Terms &amp; Conditions.</li>
            </ul>
        
            <h2>3. Refunds for Cancelled Orders</h2>
            <ul>
                <li>For prepaid orders cancelled before pickup, a full refund will be issued within 7-10 business days to the original payment method.</li>
                <li>No refund will be provided if the garments have already been processed.</li>
            </ul>
        
            <h2>4. Rescheduling Instead of Cancellation</h2>
            <ul>
                <li>Customers can request a change in pickup/delivery slot before the scheduled time, subject to slot availability.</li>
            </ul>
        
            <h2>5. Contact for Cancellations</h2>
            <p class="contact">📧 Email: support@ironbhai.com<br>
            📞 Phone: +91 8688206969</p>
        </div>
        </body>
        </html>`
        .trim()
        .replace(/\n/g, ' ')
        .replace(/\s\s+/g, ' ');
    },
    faqHtml: () => {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>FAQs - IronBhai</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 15px;
                background-color: #f9f9f9;
                color: #333;
                line-height: 1.6;
            }
            h1 {
                text-align: center;
                font-size: 1.8rem;
                margin-bottom: 20px;
                color: #222;
            }
            .faq {
                background: #fff;
                padding: 15px;
                margin-bottom: 12px;
                border-radius: 8px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                cursor: pointer;
            }
            .faq h2 {
                font-size: 1.05rem;
                margin: 0;
                color: #444;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .faq p {
                margin: 10px 0 0;
                font-size: 0.95rem;
                display: none;
            }
            .faq.active p {
                display: block;
            }
            .faq h2::after {
                content: "+";
                font-weight: bold;
                transition: transform 0.2s;
            }
            .faq.active h2::after {
                content: "-";
            }
            @media (max-width: 600px) {
                body {
                    padding: 10px;
                }
                .faq {
                    padding: 12px;
                }
                h1 {
                    font-size: 1.5rem;
                }
            }
        </style>
        </head>
        <body>
        
        <h1>Frequently Asked Questions (FAQs)</h1>
        
        <div class="faq">
            <h2>1. How do I place an order?</h2>
            <p>You can place an order through the IronBhai mobile app or website. Select your service, choose a pickup slot, and confirm your booking.</p>
        </div>
        
        <div class="faq">
            <h2>2. What services do you offer?</h2>
            <p>We provide laundry, ironing, dry cleaning, saree rolling, and special garment care services.</p>
        </div>
        
        <div class="faq">
            <h2>3. What are your service hours?</h2>
            <p>We operate 7 days a week, from 8:00 AM to 9:00 PM. Timings may vary on public holidays.</p>
        </div>
        
        <div class="faq">
            <h2>4. How much do your services cost?</h2>
            <p>Prices are listed in the app and vary depending on the garment type and service chosen.</p>
        </div>
        
        <div class="faq">
            <h2>5. Do you offer home pickup and delivery?</h2>
            <p>Yes, we provide doorstep pickup and delivery for all orders.</p>
        </div>
        
        <div class="faq">
            <h2>6. How long does it take to process my order?</h2>
            <p>Most orders are completed within 24–48 hours. Delicate or special items may take longer.</p>
        </div>
        
        <div class="faq">
            <h2>7. What if I miss my pickup or delivery?</h2>
            <p>You can reschedule through the app or contact customer support to arrange a new time.</p>
        </div>
        
        <div class="faq">
            <h2>8. Do you guarantee stain removal?</h2>
            <p>We do our best to remove stains, but 100% removal cannot be guaranteed, especially for old or set-in stains.</p>
        </div>
        
        <div class="faq">
            <h2>9. How can I pay?</h2>
            <p>We accept online payments (UPI, cards, net banking) and Cash on Delivery (COD) where available.</p>
        </div>
        
        <div class="faq">
            <h2>10. What if my garment is damaged or lost?</h2>
            <p>If damage or loss occurs due to our negligence, compensation will be provided as per our Terms &amp; Conditions.</p>
        </div>
        
        <div class="faq">
            <h2>11. Do you offer discounts or promotions?</h2>
            <p>Yes! Check the app’s “Offers” section or our social media pages for the latest deals.</p>
        </div>
        
        <div class="faq">
            <h2>12. How can I contact customer support?</h2>
            <p>
                📧 Email: support@ironbhai.com<br>
                📞 Contact: +91 8688206969<br>
                💬 WhatsApp: <a href="https://wa.me/918688206969?text=Hello%20IronBhai%2C%20I%20need%20help" target="_blank">Chat With Us</a>
            </p>
        </div>
        
        <script>
            document.querySelectorAll('.faq').forEach(faq => {
                faq.addEventListener('click', () => {
                    faq.classList.toggle('active');
                });
            });
        </script>
        
        </body>
        </html>
        `
        .trim()
        .replace(/\n/g, ' ')
        .replace(/\s\s+/g, ' ');
    },
    copyrightNoticeHtml: () => {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Copyright Notice - IronBhai</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin: 0;
              padding: 0;
              background: #f8f8f8;
              color: #333;
            }
            .container {
              max-width: 900px;
              margin: auto;
              padding: 20px;
              background: #fff;
              box-shadow: 0 0 10px rgba(0,0,0,0.05);
            }
            h1, h2 {
              color: #222;
            }
            ul {
              margin: 0;
              padding-left: 20px;
            }
            a {
              color: #0073e6;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
            .contact {
              margin-top: 20px;
              padding: 15px;
              background: #f1f1f1;
              border-left: 4px solid #0073e6;
            }
            @media (max-width: 600px) {
              body {
                font-size: 15px;
              }
              h1 {
                font-size: 20px;
              }
            }
          </style>
        </head>
        <body>
        
          <div class="container">
            <h1>Copyright Notice</h1>
            <p>© 2025 <strong>IronBhai</strong>. All Rights Reserved.</p>
            <p><strong>IronBhai</strong> and the IronBhai logo are trademarks of IronBhai. All other trademarks, service marks, trade names, product names, and logos appearing on this website are the property of their respective owners.</p>
        
            <h2>Ownership of Content</h2>
            <p>All content, designs, graphics, logos, text, images, videos, software, and other materials (“Content”) displayed on this website and in the IronBhai mobile applications are the property of IronBhai unless otherwise noted. Unauthorized use, reproduction, or distribution of any Content without prior written consent from IronBhai is strictly prohibited.</p>
        
            <h2>Use of Content</h2>
            <p><strong>You may not:</strong></p>
            <ul>
              <li>Copy, reproduce, republish, upload, post, transmit, or distribute any Content without permission.</li>
              <li>Use any trademarks, service marks, or logos from the IronBhai brand without written approval.</li>
            </ul>
        
            <p><strong>You may:</strong></p>
            <ul>
              <li>Share links to our official website or mobile apps without altering the original content.</li>
              <li>Download materials that are specifically made available for public use, provided you do not modify them and you retain all copyright and proprietary notices.</li>
            </ul>
        
            <h2>Third-Party Content</h2>
            <p>Some content may include materials from third parties. Such content remains the property of the respective owners, and all rights are reserved by them.</p>
        
            <h2>Contact Us</h2>
            <div class="contact">
              <p>For copyright inquiries, permissions, or questions about using IronBhai content, please contact:</p>
              <p>Email: <a href="mailto:support@ironbhai.com">support@ironbhai.com</a><br>
              Phone: <a href="tel:+918688206969">+91-8688206969</a><br>
              Address: Hyderabad, Telangana</p>
            </div>
          </div>
        
        </body>
        </html>`
        .trim()
        .replace(/\n/g, ' ')
        .replace(/\s\s+/g, ' ');
    },
    returnPolicyHtml: () => {
        return ``
        .trim()
        .replace(/\n/g, ' ')
        .replace(/\s\s+/g, ' ');
    },
}