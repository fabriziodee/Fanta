let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 𝚁𝙴𝚃𝙾 」─*\n*“${pickRandom(global.bucin)}”*\n*└────「 𝙼𝚈𝚂𝚃𝙸𝙲 」─*`, m)
}
handler.help = ['reto']
handler.tags = ['fun']
handler.command = /^reto/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bucin = [
"Passa il branco di una formica",
"Dì ai tuoi amici che andrai a vivere negli Stati Uniti e mandami uno screenshot di quello che ti hanno detto",
"Grida dalla finestra che vuoi succhiare e mandami il video",
"Scrivi il nome della tua cotta",
"Devi inserire il nome del mio creatore nel tuo stato di WhatsApp, senza dare contesto",
"Mandatemi una foto di voi",
"Devi disegnare il nome di un membro del gruppo da qualche parte sul tuo corpo, poi scattare una foto e inviarla",
"Scatta una foto mentre baci una TV",
  "Mandami una foto in mutande",
"Scrivi sul tuo stato di WhatsApp che ti piace mangiare sporco",
"Devi mettere sul tuo profilo WhatsApp per 3 giorni la foto di un partecipante al gruppo che è di sesso opposto al tuo 📸📸",
"Devi inviare un audio cantando la canzone: Una papera che canta felice cua cua 🦆",
"Invia un messaggio al tuo ex e digli che mi piaci ancora", "Invia un audio dicendo che amo The Shadow Brokers - Bot",
"Dì alla tua cotta che la ami e invia uno screenshot al gruppo", "Invia un audio che canta",
"Invia una foto in cui appari senza coprirti il ​​viso o altro", "Invia un video che balla",
"Invita persone che non conosci a fare un selfie con te e poi invialo al gruppo",
"Scegli alcuni numeri casuali dai tuoi contatti e invia loro un messaggio di testo 'Sono incinta@'.",
"Prendi qualunque bevanda sia vicino a te, poi mescolala con il peperoncino e bevi!",
"Prendi un numero a caso dai tuoi contatti, chiamalo e digli 'ti amo'",
"Compra il pasto più economico in mensa (o compra una bottiglia d'acqua) e singhiozza ai tuoi compagni di classe, 'Questo... è il pasto più costoso che abbia mai comprato)'",
"Compra una bottiglia di coca cola e spruzzaci dei fiori davanti alla folla.",
"Stai vicino al frigorifero, chiudi gli occhi, scegli cibo a caso, anche quando mangi, i tuoi occhi dovrebbero essere chiusi.",
"In piedi in mezzo al campo da basket e urlando: 'TI AMO MIO PRINCIPE/PRINCIPESSA'",
"Porta i tuoi rispetti a qualcuno della classe e poi dì: 'Sono al tuo servizio, Vostra Maestà'"
"Camminando battendo le mani e cantando la canzone 'Happy Birthday' dalla classe al corridoio.",
"Mettiti in ginocchio e dì 'Sposami?' la prima persona ad entrare nella stanza.",
"Fai un copricapo assurdo con il tessuto, qualunque esso sia, continua a chiedere pose davanti alla telecamera, continua a salire",
"Dì 'SEI BELLA / MOLTO BELLA, NON MENTIRE' alla ragazza che pensi sia la più carina di questa classe.",
"Dì a qualcuno in classe: 'Prima mi hanno detto che ero la tua gemella, ci siamo lasciati e poi mi sono sottoposta a un intervento di chirurgia plastica. E questa è la cosa più seria che abbia mai detto'",
"Gettare il taccuino di qualcuno nella spazzatura, proprio davanti ai loro occhi, dicendo 'Questo libro nessuno può capirlo'",
"Togliti i peli dalla gamba 3 volte!",
" Chatta con i tuoi genitori, dì loro che ti mancano con emoticon tristi.",
"Prova a cercare su Google cose spaventose o ridicole come la tripofobia ecc.",
"Siediti rilassato in mezzo al campo da basket fingendo che sia una spiaggia per prendere il sole.",
"Riempiti la bocca d'acqua e devi salire fino a due giri, se ridi e rovesci o bevi, allora devi riempire e aggiungere un altro giro.",
" Saluta la prima persona che entra in questa stanza e dì 'Benvenuto a Chi vuol essere milionario!' ",
"Manda un messaggio ai tuoi genitori 'Ehi fratello! Ho appena comprato l'ultimo numero della rivista Playboy!' ",
"Invia un messaggio ai tuoi genitori: 'Mamma, papà, so di essere un bambino adottato dall'orfanotrofio. Non nascondetelo più.'"
"Invia tre numeri casuali nei tuoi contatti e scrivi 'Sono appena diventato un modello per la rivista Playboy'",
"Mangia un cucchiaio di salsa di soia dolce e salsa di soia!",
"Mangia qualcosa ma non usare le mani.",
"Arrabbiarti con i tuoi amici che non vengono anche se hai un appuntamento per suonare insieme 'Obbligo o verità'",
"Rompi l'uovo con la testa!",
"Mangia cibo che è stato mescolato e avrà un sapore strano, ma assicurati che il cibo non sia dannoso per la tua salute a lungo o breve termine.",
"Balla come la generazione delle ragazze per i ragazzi davanti alla classe, o balla come la Super Junior per le ragazze.",
"Alza l'asta della bandiera senza la bandiera.",
"Parlare della persona che ti piace, dei tuoi amici più cari, del sesso opposto che non conosci affatto e simili.",
"Copia tutte le acconciature dei tuoi amici.",
"Cantare la canzone HAI TAYO davanti a un sacco di gente mentre balla,"
"Canta ad alta voce la canzone di Baby Shark in classe.",
"Prendi in prestito qualcosa dai vicini",
"Chiedi la firma di uno dei professori più feroci dicendo 'Sei davvero la persona che ammiro di più al mondo'",
"Chiedi soldi a qualcuno (a caso) per strada dicendo 'Non ho soldi per avere un angkot'.",
"Bevi qualcosa che è stato preparato/concordato, ma assicurati che non sia pericoloso, potrebbe essere come bere sciroppo mescolato con salsa di soja.", 
"Parlando con l'emoticon spaventata della tua cotta, va bene chattare con quello che vuoi, con qualsiasi mezzo possibile.",
"Canta il tuo film Disney preferito fuori casa mentre urli.",
"Nomina rapidamente da 1 blu a 20 blu e non devi commettere errori. Se è sbagliato, deve essere ripetuto dall'inizio.",
"Metti su una corona di carta da copia e dì a tutti nella stanza 'ONORA IL RE' indicando ogni persona con un righello.",
"Rimettiti i pantaloni fino al mattino dopo.",
"Abbraccia la persona che NON ti piace in classe e dì: 'Grazie mille per essere la persona migliore per me'"
"Vai in un campo ampio, poi corri più veloce che puoi mentre dici 'Sono pazzo, sono pazzo'",
"Scegli un fiore e poi attaccalo a qualcuno che non conosci (deve essere del sesso opposto)",
"Scegli una persona a caso per strada, poi dì 'Non sai di essere bella' (come gli One Direction)",
"Fingendo di essere posseduto, ad esempio: posseduto da una tigre, ecc.",
"Chiedigli di fischiare perché ha di nuovo la bocca piena di cibo.",
"Chiedi di essere un cameriere per servirti con i tuoi amici a pranzo.",
"Dì loro di usare i calzini per fare i guanti.",
"Dì loro di indossare il cappello più strano / il casco più sciocco per il prossimo round.",
"Chiama tua madre e dille 'mamma, voglio sposarmi il prima possibile'",
"Chiama il tuo ex e digli 'mi manchi'",
"Cambia i vestiti con la persona più vicina fino al turno successivo.",
"Aggiorna lo stato su WhatsApp qualsiasi cosa con parole che iniziano con 'S'",
"Carica un video di canto su YouTube che sta cantando canzoni popolari.",
"Colora le unghie delle mani e dei piedi in diversi colori per una settimana.",
"mangiare 2 cucchiai di riso senza contorni",
"Invia l'emoji '🦄💨' ogni volta che scrivi in ​​un gruppo per 1 giorno",
"dire 'Benvenuti a Chi vuol essere milionario!' a tutti i gruppi che hai",
"canta il ritornello dell'ultima canzone che hai suonato",
"Invia un audio vocale alla tua ex / cotta / fidanzata, saluta (nome), voglio chiamarti, solo un momento. Mi manchi 🥺👉🏼👈🏼 ",
"Dì a persone a caso: prima mi hanno detto che ero la tua gemella, ci siamo lasciati e poi ho subito un intervento di chirurgia plastica. E questo,"
"Fai 1 rima per il primo giocatore!",
"racconta la tua versione di cose imbarazzanti",
"cambia nome in 'Gay' per 24 ore",
"Menziona il tuo tipo di ragazza!",
"Dì 'Sono innamorato di te, vuoi essere il mio ragazzo o no?' all'ultimo sesso opposto con cui hai chattato su WhatsApp, aspetta che ti risponda",
"Parla con il tuo ex su WhatsApp e digli 'Ti amo, per favore torna'. Invia uno screenshot come prova della sfida compiuta!"
] 
