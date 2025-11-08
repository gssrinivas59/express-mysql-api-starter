const helper = require("../helpers/functions");
const config = helper.getConfig();

const moment = require('moment-timezone');

moment.tz.setDefault(config?.timezone);

const currency = require('../helpers/currency');

const forgotTemplate = (name, link) => {

    //return moment().format('LLLL');

    let subject = `Reset Password`;

    let html = `<table width="100%" cellspacing="0" cellpadding="0" style="margin:0;padding:0;width:100%;font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif">
    <tbody><tr style="margin:0;padding:0">
        <td style="margin:0;padding:0"></td>
        <td bgcolor="#F6F6F6" style="margin:0 auto!important;padding:0;background:#f6f6f6;display:block!important;max-width:800px!important;clear:both!important">
            <br style="margin:0;padding:0">
            <div style="margin:0 auto 15px;padding:0;max-width:600px;border-radius:3px;display:block;background:#fff">
                <div style="margin:0;padding:0 0px">
                    
                    <table cellspacing="0" cellpadding="0" style="margin:0;padding:0;width:100%">
                        <tbody><tr style="margin:0;padding:0">
                            <td style="margin:0;padding:0"></td>
                            <td bgcolor="#fff" style="margin:0 auto!important;padding:15px 0;background:#fff;border-bottom:1px solid #e9e9e9;display:block!important;max-width:800px!important;clear:both!important">
                                <table width="100%" cellspacing="0" cellpadding="0" style="margin:0;padding:0">
                                    <tbody><tr style="margin:0;padding:0">
                                        <td valign="top" align="center" width="100" style="margin:0;padding:0;">
                                            <img alt="${config?.company_full_name}" style="width:80px;margin:10px 0;padding:0;max-width:100%" src="${config?.logo_image}" class="CToWUd" data-bit="iit">
                                            <img alt="${config?.company_full_name}" style="width:130px;margin:25px 12px;padding:0;max-width:100%;" src="${config?.logo_image}" class="CToWUd" data-bit="iit">
                                        </td>
                                    </tr>
                                </tbody></table>
                            </td>
                            <td style="margin:0;padding:0"></td>
                        </tr>
                    </tbody></table>
                    
                </div>
                <div style="margin:0;padding:0 15px">
                    <table width="100%" cellspacing="0" cellpadding="0" style="margin:0;padding:0">
                        <tbody><tr style="margin:0;padding:0">
                            <td style="margin:0;padding:0">
                                <br style="margin:0;padding:0">

                                <p style="margin:0;padding:0;margin-bottom:5px;color:#585858;font-weight:400;font-size:13px;line-height:1.6">Dear <span class="il">Dear ${name},</span><br/><br/></p>

                                <p style="margin:0;padding:0;margin-bottom:5px;color:#585858;font-weight:400;font-size:13px;line-height:1.6">
                                    <span>A password reset for your account was requested.<br/><br/>
                                    Please click the button below to change your password.<br/><br/>
                                    Note that this link is valid for 24 hours. After the time limit has expired, you will have to resubmit the request for a password reset.</span>
                                </p>
                                <br/><br/>

                                <p style="margin:0;padding:0;margin-bottom:5px;color:#585858;font-weight:400;font-size:13px;line-height:1.6">
                                    <a href="${link}" style="border:1px solid #cccccc;display:inline-block" target="_blank" data-saferedirecturl="${link}">
                                        <span style="background:#f97316;color:#fff;display:inline-block;min-width:80px;border-top:14px solid #f97316;border-bottom:14px solid #f97316;border-left:12px solid #f97316;border-right:12px solid #f97316;text-align:center;text-decoration:none;white-space:nowrap;font-size:16px;font-weight:700;line-height:1.2;letter-spacing:-0.2px">
                                            Change Your Password
                                        </span>
                                    </a>
                                </p>
                                
                            </td>
                        </tr>
                    </tbody></table>
                </div>

                <br style="margin:0;padding:0">

                <div style="margin:0;padding:0 15px;background:#fbfbfb">
                    <br style="margin:0;padding:0">
                    <table width="100%" cellspacing="0" cellpadding="0" style="margin:0;padding:0">
                        <tbody><tr style="margin:0;padding:0">
                            <td style="margin:0;padding:0">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#9b9b9b;margin:0;padding:0">
                                    <tbody style="margin:0;padding:0">
                                    <tr style="margin:0;padding:0">
                                        <td align="center" style="margin:0;padding:0">${config?.copy_rights}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody></table>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" style="font-family:Arial,Helvetica,sans-serif;font-size:10px;padding:10px 0;color:#9b9b9b;margin:0">
                        <tbody style="margin:0;padding:0">
                        <tr style="margin:0;padding:0">
                            <td align="center" width="33.3333%" style="margin:0;padding:0">
                                <span class="il">${config?.company_full_name}</span>,${config?.pickup_location?.address}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <br style="margin:0;padding:0">
                </div>
            </div>
            
        </td>
        <td style="margin:0;padding:0"></td>
    </tr>
</tbody></table>`;

    

return {subject, html};
    
}
  
module.exports = forgotTemplate;