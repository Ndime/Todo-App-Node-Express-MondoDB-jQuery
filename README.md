# Todo-App-Node-Express-MondoDB-jQuery
This is a Simple Todo Application that make use of REST API with NodeJS, Express &amp; MonogoDB

# Instructions
<ul>
 <li>Clone git repository to your environment</li>
 <li>Before running make sure to install MongoDB on your environment corrently. See instructions below to insall for Amazon based linux OS. For other linux environments paste thefollowing code to install MongoDB <ul><li><code>sudo apt-get install -y mongodb-org</code></li><li><code>mkdir data</code></li><code>echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod</code><li><code>chmod a+x monogod</code></li><li>Go to application directory and run <code>npm install mongoose --save</code> on the terminal to install Moongoose</li></ul></li>
  <li>While still on application directory, run <code>node index.js</code> on the terminal</li>
 <li>preview app on <b>port 3000</b> of your <b>localhost</b></code></li>
</ul>

# Amazon Based(Linux): How to install MongoDB after creating your EC2 instance for C9.
<ul>
<li>Run the following commands <code>sudo nano /etc/yum.repos.d/mongodb-org-3.6.repo</code> on the shell</li>

<li>Copy-paste the following content to the file</li>

<li><code>[mongodb-org-3.6]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/3.6/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-3.6.asc
</code></li>

<li>Hit <code>ctrl+o</code> and then hit <code>enter</code> to save the file and hit <code>ctrl+x</code> to close the file.</li>

<li>Run the command <code>sudo yum install -y mongodb-org</code></li>

<li>Run the command <code>mkdir /home/ec2-user/environment/data</code> to create a data directory for your MongoDB data folder.</li>

<li>Run the command <code>mongod --bind_ip=$IP --dbpath=/home/ec2-user/environment/data --nojournal</code> to run the MongoDB daemon process.</li>
<ul>
That’s all.

