let handler = async (m, { conn, usedPrefix, command}) => {
      let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
      if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`;
    
      let pp = './Assets/Gurulogo.jpg'
      let more = String.fromCharCode(8206);
      let readMore = more.repeat(850); 
    
      let lkr;
      switch (command) {
        case 'list':
lkr = "*🦋 │𝐂𝐘𝐁𝜩𝐑│𝐏𝜟𝐍𝐃𝐀│𝐌𝐃│𝐕➂ 🦋*\n\n" +
"*➀*" + usedPrefix + "💞*𝘉𝘖𝘛𝘔𝘌𝘕𝘜*💞\n\n" +
"*➁*" + usedPrefix + "🌟*𝘖𝘞𝘕𝘌𝘙𝘔𝘌𝘕𝘜*🌟\n\n" +
"*➂*" + usedPrefix + "🛡️*𝘎𝘙𝘖𝘜𝘗𝘔𝘌𝘕𝘜*🛡️\n\n" +
"*➃*" + usedPrefix + "📥*𝘋𝘓𝘔𝘌𝘕𝘜*📥\n\n" +
"*➄*" + usedPrefix + "🛠️*𝘚𝘛𝘐𝘊𝘒𝘌𝘙𝘔𝘌𝘕𝘜*🛠️\n\n" +
"*𝘉𝘠-*" + usedPrefix + "*🦋│𝐂𝐘𝐁𝜩𝐑│𝐏𝜟𝐍𝐃𝐀│𝐌𝐃│𝐕➂🦋";
break;

          
        
        

        case 'botmenu':
          lkr = `┄──•••───╮
          *𝘉𝘖𝘛 𝘔𝘌𝘕𝘜*  
   ╰───•••──┄      
   ┏━━━✢✢━━━┓
   ⎪🦋 _${usedPrefix}gita_
   ⎪🦋 _${usedPrefix}ping_
   ⎪🦋 _${usedPrefix}uptime_
   ⎪🦋 _${usedPrefix}bot_
   ⎪🦋 _${usedPrefix}owner_
   ⎪🦋 _${usedPrefix}script_
   ⎪🦋 _${usedPrefix}runtime_
   ⎪🦋 _${usedPrefix}infobot_
   ⎪🦋 _${usedPrefix}donate_
   ⎪🦋 _${usedPrefix}groups_
   ⎪🦋 _${usedPrefix}blocklist_
   ⎪🦋 _${usedPrefix}listprem_
   ⎪🦋 │𝐂𝐘𝐁𝜩𝐑│𝐏𝜟𝐍𝐃𝐀│𝐌𝐃│𝐕➂ 🦋
   ┗━━━✢✢━━━┛`; // Your bot menu message here
          break;
        case 'ownermenu':
          lkr = `┄──•••───╮
          𝘖𝘞𝘕𝘌𝘙 𝘔𝘌𝘕𝘜  
     ╰───•••──┄      
     ┏━━━✢✢━━━┓
     ⎪🦋 _${usedPrefix}banchat_
     ⎪🦋 _${usedPrefix}unbanchat_
     ⎪🦋 _${usedPrefix}banuser_
     ⎪🦋 _${usedPrefix}unbanuser_
     ⎪🦋 _${usedPrefix}Broadcast_
     ⎪🦋 _${usedPrefix}Broadcastgc_
     ⎪🦋 _${usedPrefix}join_
     ⎪🦋 _${usedPrefix}setppbot_
     ⎪🦋 _${usedPrefix}setprefix_
     ⎪🦋 _${usedPrefix}resetprefix_
     ⎪🦋 _${usedPrefix}getfile_
     ⎪🦋 _${usedPrefix}getplugin_
     ┗━━━✢✢━━━┛`; // 
          break;
          case 'groupmenu':
          lkr = `┄──•••───╮
          𝘎𝘙𝘖𝘜𝘗 𝘔𝘌𝘕𝘜 
    ╰───•••──┄      
    ┏━━━✢✢━━━┓
    ⎪🦋_${usedPrefix}kick *<@tag>*_
    ⎪🦋_${usedPrefix}promote *<@tag>*_
    ⎪🦋 _${usedPrefix}demote *<@tag>*_
    ⎪🦋 _${usedPrefix}infogroup_
    ⎪🦋 _${usedPrefix}resetlink_
    ⎪🦋 _${usedPrefix}link_
    ⎪🦋 _${usedPrefix}setpp *<image>*_
    ⎪🦋 _${usedPrefix}setname *<text>*_
    ⎪🦋 _${usedPrefix}setdesc *<text>*_
    ⎪🦋 _${usedPrefix}setwelcome *<text>*_
    ⎪🦋 _${usedPrefix}setbye *<text>*_
    ⎪🦋 _${usedPrefix}hidetag *<text/image/audio/vid>*_
    ⎪🦋 _${usedPrefix}warn *<@tag>*_
    ⎪🦋 _${usedPrefix}unwarn *<@tag>*_
    ⎪🦋 _${usedPrefix}group *<open/close>*_
    ⎪🦋 _${usedPrefix}enable
    ┗━━━✢✢━━━┛`; // 
          break;
          case 'downloadermenu':
            case 'dlmenu' :
          lkr = ` ┄──•••───╮
    𝘋𝘓 𝘔𝘌𝘕𝘜 
   ╰───•••──┄      
   ┏━━━✢✢━━━┓
   ⎪🦋_${usedPrefix}play_
   ⎪🦋_${usedPrefix}song_
   ⎪🦋 _${usedPrefix}yta <link>_
   ⎪🦋 _${usedPrefix}ytv <link>_
   ⎪🦋 _${usedPrefix}ytmp3 <link>_
   ⎪🦋 _${usedPrefix}ytmp4 <link>_
   ⎪🦋 _${usedPrefix}gimage_
   ⎪🦋 _${usedPrefix}pinterest_
   ⎪🦋 _${usedPrefix}mediafire <link>_
   ⎪🦋 _${usedPrefix}gdrive <link>_
   ⎪🦋 _${usedPrefix}gitclone <link>_
   ⎪🦋 _${usedPrefix}twitter <link>_
   ⎪🦋 _${usedPrefix}tiktok <link>_
   ⎪🦋 _${usedPrefix}tiktokstalk_
   ⎪🦋 _${usedPrefix}instagram <link>_
   ⎪🦋 _${usedPrefix}spotify_
   ⎪🦋 _${usedPrefix}facebook <link>_
   ┗━━━✢✢━━━┛`; // 
          break;
          case 'stickermenu':
          lkr = `┄──•••───╮
          𝘚𝘛𝘐𝘊𝘒𝘌𝘙 𝘔𝘌𝘕𝘜
     ╰───•••──┄      
     ┏━━━✢✢━━━┓
     ⎪🦋 _${usedPrefix}sticker_
     ⎪🦋 _${usedPrefix}take_
     ⎪🦋 _${usedPrefix}scircle_
     ⎪🦋 _${usedPrefix}smaker_
     ⎪🦋 _${usedPrefix}sremovebg_
     ⎪🦋 _${usedPrefix}getsticker_
     ⎪🦋 _${usedPrefix}emojimix_
     ⎪🦋 _${usedPrefix}toimg_
     ⎪🦋 _${usedPrefix}tovid_
     ⎪🦋 _${usedPrefix}ttp_
     ⎪🦋 _${usedPrefix}telesticker_
     ⎪🦋 _${usedPrefix}attp_
     ⎪🦋 _${usedPrefix}attp2_
     ⎪🦋 _${usedPrefix}attp3_
     ┗━━━✢✢━━━┛`; 
          break;
          case 'nsfwmenu':
          lkr = `use command ${usedPrefix}nsfw`; // 
          break;
          case 'logomenu':
          lkr = `use ${usedPrefix}logo to see all options \ngfx cmd upto 12`; // 
          break;
        default:
          lkr = `Invalid command. Type ${usedPrefix}list to see available options.`;
      }
    
      conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] });
    
      let done = '🦋';
      m.react(done);
    };
    
    handler.help = ['list', 'botmenu', 'ownermenu', 'groupmenu', 'dlmenu', 'downloadermenu', 'economymenu', 'funmenu', 'gamemenu', 'stickermenu', 'nsfwmenu', 'logomenu', 'toolmenu'];
    handler.tags = ['main'];
    handler.command = ['list', 'botmenu', 'ownermenu', 'groupmenu', 'dlmenu', 'downloadermenu', 'economymenu', 'funmenu', 'gamemenu', 'stickermenu', 'nsfwmenu', 'logomenu', 'toolmenu'];
    
    export default handler
    

