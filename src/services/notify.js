const fcm = require("../config/firebase");
const sms = require("./smsService");

const orderNotifications = {
  queue: {
    title: "Order Created",
    body: "Your order #{order_number} with {total_items} items has been placed. Need to drop your clothes in the #{warehouse_name}",
    sms: "Your order #{order_number} with {total_items} items has been placed. Thank you for using Omika Solutions",
    sms_tid: ""
  },
  pending: {
    title: "Order Placed",
    body: "Your order #{order_number} with {total_items} items has been placed. We're assigning a pickup partner.",
    //sms: "Your Order {order_number} placed successfully. Pickup Partner will be assigned shortly. Thank you for using"
    sms: "Your Order {order_number} placed successfully. Pickup Partner will be assigned shortly. Thank you for using Omika Solutions",
    sms_tid: ""
  },
  pickup_requested: {
    title: "Pickup Scheduled",
    body: "Order #{order_number}: Pickup scheduled for {total_items} items. OTP: {otp}.",
    //sms: "Pickup Partner {pickup_person_name} has been assigned for your Order {order_number}. Please provide OTP {otp} to complete pickup."
    sms: "Pickup Partner {pickup_person_name} has been assigned for your Order {order_number}. Please provide OTP {otp} to complete pickup. Omika Solutions",
    sms_tid: ""
  },
  picked_up: {
    title: "Order Picked Up",
    body: "Order #{order_number} with {total_items} items has been collected. Heading to our warehouse.",
    //sms: "Order #{order_number}: {total_items} items collected, en route to warehouse."
    sms: "Order #{order_number}: {total_items} items collected, en route to warehouse.",
    sms_tid: ""
  },
  in_warehouse: {
    title: "Order in Warehouse",
    body: "Order #{order_number}: {total_items} items are now at our warehouse, queued for ironing.",
    //sms: "Order #{order_number}: {total_items} items at warehouse, queued for ironing."
    sms: "Order #{order_number}: {total_items} items at warehouse, queued for ironing.",
    sms_tid: ""
  },
  in_progress: {
    title: "Order in Progress",
    body: "Order #{order_number}: Work in progress for {total_items} items.",
    //sms: "Order #{order_number}: Work in progress for {total_items} items."
    sms: "Order #{order_number}: Work in progress for {total_items} items.",
    sms_tid: ""
  },
  ready_for_delivery: {
    title: "Ready for Delivery",
    body: "Order #{order_number}: {total_items} items are ready for delivery.",
    //sms: "Order #{order_number}: {total_items} items ready for delivery."
    sms: "Order #{order_number}: {total_items} items ready for delivery.",
    sms_tid: ""
  },
  picked_for_delivery: {
    title: "Assigned for Delivery",
    body: "Order #{order_number}: Delivery partner assigned for {total_items} items.",
    //sms: "Order #{order_number}: Delivery partner assigned. {total_items} items."
    sms: "Order #{order_number}: Delivery partner assigned. {total_items} items.",
    sms_tid: ""
  },
  out_for_delivery: {
    title: "Out for Delivery",
    body: "Order #{order_number}: {total_items} items are out for delivery. OTP: {otp}.",
    //sms: "Your Order {order_number} is out for delivery. Please keep OTP {otp} ready to confirm delivery with our partner."
    sms: "Your Order {order_number} is out for delivery. Please keep OTP {otp} ready to confirm delivery with our partner. Omika Solutions",
    sms_tid: ""
  },
  delivered: {
    title: "Order Delivered",
    body: "Order #{order_number}: {total_items} items delivered. Thanks for choosing us!",
    //sms: "Your order {order_number} has been delivered successfully. Thank you for choosing. We look forward to serving you again!"
    sms: "Your order {order_number} has been delivered successfully. Thank you for choosing. We look forward to serving you again! Omika Solutions",
    sms_tid: ""
  },
  cancelled: {
    title: "Order Cancelled",
    body: "Order #{order_number} has been cancelled. Contact support for details.",
    //sms: "Your order {order_number} has been cancelled as per your request. If this was not intended, please contact our support team."
    sms: "Your order {order_number} has been cancelled as per your request. If this was not intended, please contact our support team. Omika Solutions",
    sms_tid: ""
  },
  payment_failed: {
    title: "Payment Failed",
    body: "Order #{order_number}: Your payment could not be processed. Please try again or use a different method.",
    //sms: "Payment for order {order_number} was unsuccessful. Please retry completing the payment to confirm your order. Contact support if needed."
    sms: "Payment for order {order_number} was unsuccessful. Please retry completing the payment to confirm your order. Contact support if needed. Omika Solutions",
    sms_tid: ""
  }
};

function formatMessage(template, variables) {
  return template.replace(/\{(\w+)\}/g, (_, key) => variables[key] || '');
}

/**
 * Internal helper to build the notification object
 */
function buildOrderMessage(statusKey, variables) {
  const template = orderNotifications[statusKey];
  //if (!template) throw new Error(`Unknown status: ${statusKey}`);
  if (!template) return null;

  return {
    fcm: {
      title: template.title,
      body: formatMessage(template.body, variables)
    },
    data: variables,
    sms: formatMessage(template.sms, variables)
  };
}

module.exports = {
  orderMessage: (statusKey, variables) => {
    return buildOrderMessage(statusKey, variables);
  },

  sendOrderMessage: async (statusKey, variables) => {
    const msg = buildOrderMessage(statusKey, variables);

    try {
      await fcm.messaging().send({
        topic: `user${variables.user_id}`,
        notification: msg.fcm,
        data: {}
      });

      if(statusKey == 'pending' || statusKey == 'pickup_requested' || statusKey == 'out_for_delivery' || statusKey == 'delivered' || statusKey == 'cancelled' || statusKey == 'payment_failed') {
        
        if(variables?.mobile_wc) {
         await sms.sendSms(variables.mobile_wc, msg.sms, 1, msg.sms_tid);
        }
      }

    } catch (err) {
      console.error("FCM send error (ignored):", err.message);
    }

    return msg;
  }
};
