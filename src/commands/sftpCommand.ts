import { MessageAttachment, MessageEmbed } from "discord.js";
import { Command, CommandExecutor, CommandExecutorArgs } from "ndbf";

@Command("sftp", { aliases: ["ftp"] })
export class sftpCommand implements CommandExecutor {
	async execute({ bot, msg, args }: CommandExecutorArgs) {
		let embed = new MessageEmbed()
			.setTitle("SFTP/FTP Faq")
			.setColor("#ff3333")
			.setThumbnail("https://image.flaticon.com/icons/png/512/2879/2879494.png")
			.setDescription(
				`Manage files with FileZilla!
				Do you want to upload your own folder to your server? Back up your server, set up a custom jar or upload plugins. That is possible with FileZilla! This is an FTP program, FTP stands for "File Transfer Protocol".
				With an FTP program, you can quickly and easily delete, modify or upload files to your server.

				Downloading FileZilla
				Let's start with the installation of this program!
				To start, we go to the FileZilla website: filezilla-project.org

				Arrived at the website we see this:

				We choose here for the FileZilla client version because the client connects to a server.
				If you have clicked on the button you will be taken to a page with a download button as shown in the image below.

				As you can see here, Windows is my operating system. 
				So make sure that you have your operating system with you. 
				Then we click on the green button and the download starts automatically.

				Starting FileZilla
				Now that the program has been downloaded, we navigate on our computer to where the program is stored. When you have found the program you can double click on it. It is possible that your computer is now requesting permission for this program. If this happens just click on allow!

				On the left side of the screen, you see the files from your own computer.
				The files from the server that you are connecting to will appear on the right.

				Connecting with SFTP
				To connect to the server we first have to look up four things. I also marked these four things in red in the previous image. To find this information, we log in to our GameCP and navigate to Configuration > SFTP Settings

				This is the information we need for FileZilla to properly connect!

				The password is the password used to log in to your GameCP account.

				When we have entered this, we click on “Quick connect”. Right now the files from your server will appear! We will elaborate on this in the next blog!
				I hope you have learned something from it, and hope to see you again in the next blog!`
			)
			.setURL(
				"https://cubes.host/client/knowledgebase/6/Using-and-Installing-FileZilla-to-use-SFTP.html"
			)
			.toJSON();

		await msg.channel.createMessage({ embed });
	}
}
