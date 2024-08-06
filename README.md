## Showcasing My AWS Skills

To put the skills I learned while studying AWS into practice, I decided to create a project that showcases my work. **I  developed [syedscerts.com](https://https://syedscerts.com/)!** This project allowed me to get hands-on experience with various AWS services and combine both front-end and back-end development. Here's a quick rundown of what I did and what I learned.

### What I Built
![cloudArchitectureblue](https://github.com/user-attachments/assets/d8bacbf5-e4a8-4345-bfe0-3651e53c69d7)

I developed an online resume and hosted it on AWS, leveraging a range of AWS services to create a secure, scalable, and cost-effective project. The main components of the project included:

- **Static Website Hosting**: Hosted the site as a static site on Amazon S3, simplifying the setup and reducing costs.
- **HTTPS Security**: Implemented HTTPS using Amazon CloudFront, ensuring secure and reliable content delivery.
- **Visitor Counter**: Implemented a visitor counter feature using JavaScript. Each visit triggers a Lambda function that updates a DynamoDB table, which keeps track of the total number of visits. The counter updates in real-time, displaying the current number of views. *Try [refreshing the page](javascript:location.reload();) yourself to see the view counter go up!*

### Key Features

- **Custom Domain**: Configured a custom domain with Amazon Route 53, providing a professional and easy-to-remember URL.
- **Backend Services**: For storing visitor data, I used Amazon DynamoDB. An API built with AWS API Gateway and AWS Lambda handles data interactions, ensuring scalability and efficiency.
- **Infrastructure as Code**: Employed AWS SAM (Serverless Application Model) to define and deploy the infrastructure, making it efficient to manage and update.

### Tools and Tech

- **Infrastructure**: AWS SAM (Serverless Application Model), CloudFront, S3, Route 53
- **Backend**: Python (AWS Lambda), API Gateway, DynamoDB
- **CI/CD**: GitHub Actions for smooth deployment whenever I update the code
- **Frontend**: HTML, CSS, JavaScript

### What I Learned

- **AWS Services**: Got a real taste of using AWS services, especially serverless stuff, and learned some best practices along the way.
- **Web Development**: Improved my skills in building and styling web pages, making them responsive and user-friendly.
- **Infrastructure as Code**: Learned the importance of automating cloud infrastructure setups to save time and avoid manual errors.
- **Continuous Deployment**: Set up CI/CD pipelines to make updates a breeze, with everything deploying automatically when I push new changes.

Overall, this project was a fun and practical way to apply what I’ve been learning about AWS. I'm excited to keep exploring and building more cool stuff with cloud technologies!

## Download My Resume

You can download my resume by clicking the link below:

[Download Resume](https://syed-cloud-resume.s3.us-west-2.amazonaws.com/SyedRaza.pdf)
