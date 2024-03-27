import { transporter } from "../../../mailer/config";

export class Application {
  async sendApplicationmail(data: {
    description: string;
    status: string;
    title: string;
    email: string;
  }) {
    try {
      const mailOptions = {
        from: String(process.env.ASCENT_OFFICIAL_MAIL),
        to: String(data.email),
        subject: "Job applicaiton from Ascent",
        html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
            <div style="margin:50px auto;width:70%;padding:20px 0">
              <h3 style="font-size:1.1em">Hi, you application has been ${data.status}</h3>
              <h5>${data.title}</h5>
              <p>${data.description}</p>
              <p style="font-size:0.9em;">Regards,<br />ASCENT</p>
              <hr style="border:none;border-top:1px solid #eee" />
              <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                <p>ASCENT Inc</p>
                <p>1600 Amphitheatre Parkway</p>
                <p>India</p>
              </div>
            </div>
          </div>`,
      };
      transporter.sendMail(mailOptions, async (err: Error | any, info) => {
        if (err) {
          console.log(`Err sending application mail`);
          return;
        }
        console.log(`Email sended ${JSON.stringify(info)}`);
      });
    } catch (error) {
      console.log(`Error while sending application mail ${error}`);
    }
  }
}
