let handler = async (m, { conn, usedPrefix, command}) => {
      let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
      if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`;
    
      let pp = './Assets/Gurulogo.jpg'
      let more = String.fromCharCode(8206);
      let readMore = more.repeat(850); 
    
      let lkr;
      switch (command) {
                case 'list':
lkr = "*ᴄʏʙᴇʀ-ᴘᴀɴᴅᴀ-ᴍᴅ*\n\n" +
"*.1.0*" + usedPrefix + "💞 *ʙᴏᴛ-ᴍᴇɴᴜ* 💞\n\n" +
"*.2.1*" + usedPrefix + "🌟 *ᴏᴡɴᴇʀ-ᴍᴇɴᴜ* 🌟\n\n" +
"*.3.2*" + usedPrefix + "🛡 *ɢʀᴏᴜᴘ-ᴍᴇɴᴜ* 🛡️\n\n" +
"*.4.3*" + usedPrefix + "📥 *ᴅʟ-ᴍᴇɴᴜ* 📥\n\n" +
"*.5.4*" + usedPrefix + "🛠 *ꜱᴛɪᴄᴋᴇʀ-ᴍᴇɴᴜ* 🛠️\n\n" +
"*ʙʏ-*" + usedPrefix + "*ᴄʏʙᴇʀ-ᴘᴀɴᴅᴀ-ᴍᴅ*";
break;

          
        
        

        case '.1.0':
          lkr = `
   ┏━━━━━━━━━━
      *ʙᴏᴛ-ᴍᴇɴᴜ*
   ┗━━━━━━━━━━┛     
   ┏━━━━━━━━━━━━━
   ⎪🦋_${usedPrefix}ping_
   ⎪🦋_${usedPrefix}uptime_
   ⎪🦋_${usedPrefix}bot_
   ⎪🦋_${usedPrefix}owner_
   ⎪🦋_${usedPrefix}script_
   ⎪🦋_${usedPrefix}runtime_
  ┗━━━━━━━━━━━━━`; // Your bot menu message here
          break;
        case '.2.1':
          lkr = `
     ┏━━━━━━━━━━
       *ᴏᴡɴᴇʀ-ᴍᴇɴᴜ*
     ┗━━━━━━━━━━┛     
     ┏━━━━━━━━━━━━━
     ⎪🦋_${usedPrefix}banchat_
     ⎪🦋_${usedPrefix}unbanchat_
     ⎪🦋_${usedPrefix}banuser_
     ⎪🦋_${usedPrefix}unbanuser_
     ⎪🦋_${usedPrefix}Broadcast_
     ⎪🦋_${usedPrefix}Broadcastgc_
     ⎪🦋_${usedPrefix}join_
     ⎪🦋_${usedPrefix}setppbot_
     ⎪🦋_${usedPrefix}setprefix_
     ⎪🦋_${usedPrefix}resetprefix_
     ⎪🦋_${usedPrefix}getfile_
     ⎪🦋_${usedPrefix}getplugin_
     ┗━━━━━━━━━━━━━`; // 
          break;
          case '.3.2':
          lkr = `
    ┏━━━━━━━━━━
      *ɢʀᴏᴜᴘ-ᴍᴇɴᴜ*
    ┗━━━━━━━━━━┛     
    ┏━━━━━━━━━━━━━
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
    ┗━━━━━━━━━━━━━`; // 
          break;
          case '.4.7':
            case '.4.3' :
          lkr = `
   ┏━━━━━━━━━━
       *ᴅʟ-ᴍᴇɴᴜ*
   ┗━━━━━━━━━━┛     
   ┏━━━━━━━━━━━━━
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
   ┗━━━━━━━━━━━━━`; // 
          break;
          case '.5.4':
          lkr = `
   ┏━━━━━━━━━━
      *ᴇᴄᴏɴᴏᴍʏ*
   ┗━━━━━━━━━━┛     
   ┏━━━━━━━━━━━━━
   ⎪🦋_${usedPrefix}claim/daily_
   ⎪🦋_${usedPrefix}weekly_
   ⎪🦋_${usedPrefix}monthly_
   ⎪🦋_${usedPrefix}leaderboard_
   ⎪🦋_${usedPrefix}bet_
   ⎪🦋_${usedPrefix}heal_
   ⎪🦋_${usedPrefix}craft_
   ⎪🦋_${usedPrefix}balance_
   ⎪🦋_${usedPrefix}shop_
   ⎪🦋_${usedPrefix}sell_
   ⎪🦋_${usedPrefix}adventure_
   ⎪🦋_${usedPrefix}opencrate_
   ⎪🦋_${usedPrefix}mine_
   ⎪🦋_${usedPrefix}work_
   ⎪🦋_${usedPrefix}transfer_
   ⎪🦋_${usedPrefix}todiamond_
   ⎪🦋_${usedPrefix}tomoney_
   ┗━━━━━━━━━━━━━`; // 
          break;
          case '.6.5':
          lkr = `
    ┏━━━━━━━━━━
       *ꜰᴜɴ-ᴍᴇɴᴜ*
    ┗━━━━━━━━━━┛     
    ┏━━━━━━━━━━━━━
    ⎪🦋_${usedPrefix}character_
    ⎪🦋_${usedPrefix}truth_
    ⎪🦋_${usedPrefix}dare_
    ⎪🦋_${usedPrefix}flirt_
    ⎪🦋_${usedPrefix}gay_
    ⎪🦋_${usedPrefix}shayeri_
    ⎪🦋_${usedPrefix}ship_
    ⎪🦋_${usedPrefix}waste_
    ⎪🦋_${usedPrefix}simpcard_
    ⎪🦋_${usedPrefix}hornycard_
    ⎪🦋_${usedPrefix}ytcomment_
    ⎪🦋_${usedPrefix}stupid_
    ⎪🦋_${usedPrefix}lolicon_
    ┗━━━━━━━━━━━━━`; // 
          break;
          case '.7.6':
          lkr = `
    ┏━━━━━━━━━━
       *ᴀɴɪᴍᴇ-ᴍᴇɴᴜ*
    ┗━━━━━━━━━━┛     
    ┏━━━━━━━━━━━━━
    ⎪🦋_${usedPrefix}waifu_
    ⎪🦋_${usedPrefix}neko_
    ⎪🦋_${usedPrefix}loli_
    ⎪🦋_${usedPrefix}couplepp_
    ⎪🦋_${usedPrefix}toanime_
    ⎪🦋_${usedPrefix}naruto_
    ⎪🦋_${usedPrefix}itachi_
    ⎪🦋_${usedPrefix}akira_
    ⎪🦋_${usedPrefix}asuna_
    ⎪🦋_${usedPrefix}akiyama_
    ⎪🦋_${usedPrefix}boruto_
    ⎪🦋_${usedPrefix}hornycard_
    ⎪🦋_${usedPrefix}ayuzawa_
    ⎪🦋_${usedPrefix}anna_
    ⎪🦋_${usedPrefix}chiho_
    ⎪🦋_${usedPrefix}chitoge_
    ⎪🦋_${usedPrefix}deidara_
    ⎪🦋_${usedPrefix}erza_
    ⎪🦋_${usedPrefix}elaina_
    ⎪🦋_${usedPrefix}emilia_
    ⎪🦋_${usedPrefix}hestia_
    ⎪🦋_${usedPrefix}hinata_
    ⎪🦋_${usedPrefix}inori_
    ⎪🦋_${usedPrefix}isuzu_
    ⎪🦋_${usedPrefix}kagura_
    ⎪🦋_${usedPrefix}kaori_
    ⎪🦋_${usedPrefix}keneki_
    ⎪🦋_${usedPrefix}kurumi_
    ⎪🦋_${usedPrefix}madara_
    ⎪🦋_${usedPrefix}mikasa_
    ⎪🦋_${usedPrefix}miku_
    ⎪🦋_${usedPrefix}minato_
    ⎪🦋_${usedPrefix}nezuko_
    ⎪🦋_${usedPrefix}sagiri_
    ⎪🦋_${usedPrefix}sasuke_
    ⎪🦋_${usedPrefix}sakura_
    ⎪🦋_${usedPrefix}kotori_
    ┗━━━━━━━━━━━━━
    `; 
          break;
          case '.8.7':
          lkr = `
    ┏━━━━━━━━━━
       *ɢᴀᴍᴇ-ᴍᴇɴᴜ*
    ┗━━━━━━━━━━┛     
    ┏━━━━━━━━━━━━━
    ⎪🦋_${usedPrefix}tictactoe_
    ⎪🦋_${usedPrefix}delttt_
    ⎪🦋_${usedPrefix}math_
    ⎪🦋_${usedPrefix}math answer_
    ⎪🦋_${usedPrefix}ppt_
    ⎪🦋_${usedPrefix}slot_
    ⎪🦋_${usedPrefix}casino_
    ⎪🦋_${usedPrefix}yourmom_
    ⎪🦋_${usedPrefix}teri mummy_
    ┗━━━━━━━━━━━━━`; // 
          break;
          case '.9.8':
          lkr = `
     ┏━━━━━━━━━━
        *ꜱᴛɪᴄᴋᴇʀ-ᴍᴇɴᴜ*
     ┗━━━━━━━━━━┛     
     ┏━━━━━━━━━━━━━
     ⎪🦋_${usedPrefix}sticker_
     ⎪🦋_${usedPrefix}take_
     ⎪🦋_${usedPrefix}scircle_
     ⎪🦋_${usedPrefix}smaker_
     ⎪🦋_${usedPrefix}sremovebg_
     ⎪🦋_${usedPrefix}getsticker_
     ⎪🦋_${usedPrefix}emojimix_
     ⎪🦋_${usedPrefix}toimg_
     ⎪🦋_${usedPrefix}tovid_
     ⎪🦋_${usedPrefix}ttp_
     ⎪🦋_${usedPrefix}telesticker_
     ⎪🦋_${usedPrefix}attp_
     ⎪🦋_${usedPrefix}attp2_
     ⎪🦋_${usedPrefix}attp3_
    ┗━━━━━━━━━━━━━`; 
          break;
          case '.10.9':
          lkr = `
     ┏━━━━━━━━━━
        *ᴛᴏᴏʟꜱ ᴍᴇɴᴜ*
     ┗━━━━━━━━━━     
    ┏━━━━━━━━━━━━━
     ⎪🦋_${usedPrefix}autosticker_
     ⎪🦋_${usedPrefix}pdf_
     ⎪🦋_${usedPrefix}whatmusic_
     ⎪🦋_${usedPrefix}calc_
     ⎪🦋_${usedPrefix}google_
     ⎪🦋_${usedPrefix}lyrics_
     ⎪🦋_${usedPrefix}readmore_
     ⎪🦋_${usedPrefix}ssweb_
     ⎪🦋_${usedPrefix}tts_
     ⎪🦋_${usedPrefix}translate_
     ⎪🦋_${usedPrefix}tourl_
     ⎪🦋_${usedPrefix}wikipedia_
     ⎪🦋_${usedPrefix}nowa_
     ⎪🦋_${usedPrefix}qrmaker_
     ⎪🦋_${usedPrefix}readqr_
     ⎪🦋_${usedPrefix}fancy_
     ⎪🦋_${usedPrefix}weather_
     ⎪🦋_${usedPrefix}siri_
     ⎪🦋_${usedPrefix}alexa_
     ⎪🦋_${usedPrefix}dalle_
     ⎪🦋_${usedPrefix}tocartoon_
     ⎪🦋_${usedPrefix}quote_
     ⎪🦋_${usedPrefix}technews_
     ⎪🦋_${usedPrefix}define_
     ⎪🦋_${usedPrefix}pokedex_
     ⎪🦋_${usedPrefix}removebg_
     ⎪🦋_${usedPrefix}apk_
     ⎪🦋_${usedPrefix}tinyurl/shorturl_
     ⎪🦋_${usedPrefix}readvo_
     ⎪🦋_${usedPrefix}true_
    ┗━━━━━━━━━━━━━`; // 
          break;
          case '.11.10':
          lkr = `🦋 │𝐂𝐘𝐁𝜩𝐑│𝐏𝜟𝐍𝐃𝐀│𝐌𝐃│𝐕➂ 🦋`; // 
          break;
          case '.12.11':
          lkr = `🦋 │𝐂𝐘𝐁𝜩𝐑│𝐏𝜟𝐍𝐃𝐀│𝐌𝐃│𝐕➂ 🦋`; // 
          break;
        default:
          lkr = `🦋 │𝐂𝐘𝐁𝜩𝐑│𝐏𝜟𝐍𝐃𝐀│𝐌𝐃│𝐕➂ 🦋.`;
      }
    
      conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] });
    
      let done = '🦋';
      m.react(done);
    };
    
    handler.help = ['list', 'botmenu', 'ownermenu', 'groupmenu', 'dlmenu', 'downloadermenu', 'economymenu', 'funmenu', 'gamemenu', 'stickermenu', 'nsfwmenu', 'logomenu', 'toolmenu'];
    handler.tags = ['main'];
    handler.command = ['list', 'botmenu', 'ownermenu', 'groupmenu', 'dlmenu', 'downloadermenu', 'economymenu', 'funmenu', 'gamemenu', 'stickermenu', 'nsfwmenu', 'logomenu', 'toolmenu'];
    
    export default handler
    

