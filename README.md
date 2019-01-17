# Todo-App-Node-Express-MondoDB-jQuery
This is a Simple Todo Application that make use of REST API with NodeJS, Express &amp; MonogoDB


# For C9 Amazon Cloud Users: Just follow the steps below to install MongoDB after creating your EC2 instance for C9.


Run the command <code>sudo nano /etc/yum.repos.d/mongodb-org-3.6.repo</code> on the shell

Copy-paste the following content to the file

<code>[mongodb-org-3.6]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/3.6/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-3.6.asc
</code>

Hit <code>ctrl+o</code> and then hit <code>enter</code> to save the file and hit <code>ctrl+x</code> to close the file.

Run the command <code>sudo yum install -y mongodb-org</code>

Run the command <code>mkdir /home/ec2-user/environment/data</code> to create a data directory for your MongoDB data folder.

Run the command <code>mongod --bind_ip=$IP --dbpath=/home/ec2-user/environment/data --nojournal</code> to run the MongoDB daemon process.

That’s all.

