// Next.js API route support: https://nextjs.org/docs/api-routes/introdu
import {dockStart} from '@nlpjs/basic'; 




let emoji = "😇" 
export default async function handler(req, res) {
  const{
    query: {input}
  }=req;

  const dock = await dockStart({ use: ['Basic']});
  const nlp = dock.get('nlp');
  nlp.addLanguage('en');
  // Adds the utterances and intents for the NLP
  nlp.addDocument('en', 'goodbye for now', 'greetings.bye');
  nlp.addDocument('en', 'bye bye take care', 'greetings.bye');
  nlp.addDocument('en', 'okay see you later', 'greetings.bye');
  nlp.addDocument('en', 'bye for now', 'greetings.bye');
  nlp.addDocument('en', 'i must go', 'greetings.bye');
  nlp.addDocument('en', 'hello', 'greetings.hello');
  nlp.addDocument('en', 'hi', 'greetings.hello');
  nlp.addDocument('en', 'howdy', 'greetings.hello');
  nlp.addDocument('en', 'hey', 'greetings.hello');
  nlp.addDocument('en', 'alphabet', 'first.phase');
  nlp.addDocument('en', 'alphabe', 'first.phase');
  nlp.addDocument('en', 'letters', 'first.phase');
  nlp.addDocument('en', 'vowel', 'second.phase');
  nlp.addDocument('en', 'vowels', 'second.phase');
  nlp.addDocument('en', 'consonant', 'second.phase');
  nlp.addDocument('en', 'consonants', 'second.phase');
  nlp.addDocument('en', 'consanant', 'second.phase');
  nlp.addDocument('en', 'case', 'third.phase');
  nlp.addDocument('en', 'cases', 'third.phase');
  nlp.addDocument('en', 'harmonny', 'fifth.phase');
  nlp.addDocument('en', 'harmony', 'fifth.phase');
  nlp.addDocument('en', 'round', 'sixth.phase');
  nlp.addDocument('en', 'rounding', 'sixth.phase');
  nlp.addDocument('en', 'rond', 'sixth.phase');
  nlp.addDocument('en', 'rund', 'sixth.phase');
  nlp.addDocument('en', 'roun', 'sixth.phase');


  // Train also the NLG
  nlp.addAnswer('en', 'greetings.bye', 'Till next time');
  nlp.addAnswer('en', 'greetings.bye', 'see you soon!');
  nlp.addAnswer('en', 'greetings.hello', "Hey there! let's start learning Turkish! You can type 'alphabet' to reach first content!");
  nlp.addAnswer('en', 'greetings.hello', "Greetings! let's start learning on Turkish! You can type 'alphabet' to reach first content!");  
  nlp.addAnswer('en', 'first.phase', ` In Turkish, as in English, Latin alphabets are used. There are 29 letters in Turkish. The letters are:
  A, B, C, Ç, D, E, F, G, Ğ, H, I,, İ, J, K, L, M, N, O, Ö, P, R, S, Ş, T, U, Ü, V, Y, Z. The lower case of the letters are: a, b, c, ç, d, e, f, g, ğ, h, ı, i, j, k, l, m, n, o, ö, p, r, s, ş, t, u, ü, v, y, z.  When you are ready,
  you can type\n "consonants" or "vowels" to see next content! ${emoji}`   );  
  nlp.addAnswer('en', 'second.phase',  `The consonants are b, c, ç, d, f, g, ğ, h, j, k, l, m, n, p, r, s, ş, t, v, y, z. The vowels are a, e, ı, i, o, ö, u, ü. Let's check the next content by typing "cases"`);  
  
  nlp.addAnswer('en', 'third.phase',  `Turkish nouns have no grammatical gender, but have six grammatical cases: nominative or absolute (used for the subject or an indefinite direct object), accusative (used for a definite direct object), dative (= to), locative (= in), ablative (= from), genitive (= of).
  In Turkish, cases are applied through suffixes. Suffix "a/e" for dativ, "ı/i" for accusativ, "ın/in" for genitive, "ta/da" for locative, "den/tan" for ablative. As an example: book is written as "kitap" in Turkish. In accusative case: "kitab(ı)", dative case: to book = kitab(a), locative: at book = kitap(ta), ablative: from book = kitap(tan), genitive: of book = kitap(ın). You can type "harmony" to move next content. 
  `); 
nlp.addAnswer('en', 'fifth.phase',  `In Turkish, there are two harmony rules. First is Front/back harmony and the second is Rounding wovel harmony.
For the front/back harmony: If there is a back vowel (a, ı, o, u) in the first syllable of a word, the vowels in other syllables are also back vowels (a, ı, o, u); if there is a front vowel (e, i, ö, ü) in the first syllable, the vowels in other syllables should be front (e, i, ö, ü). If 
a suffix comes at the end of the word, the same rule is applied for the suffix. For example:  
house:ev, houses:evler; wave:dalga, waves: dalgalar; lip:dudak , lips: dudaklar. You can type "rounding" for the last rule.`);  
nlp.addAnswer('en', 'sixth.phase',  `The second harmony rule is rounding wovel harmony. 
In a Turkish word, according to rounding vowel harmony, if the first vowel in the word is unrounded (a, e, ı, i), next vowels should be unrounded (a, e, ı, i); and if the first vowel is rounded (o, ö, u, ü ) it is followed by rounded closed unrounded (u, ü) or open unrounded  (a, e) vowels. Also, vowels "o" and "ö" take place only at the first syllable. Examples for the words which meet the rounding vowel harmony rule: "bilezik", "kapı", "odun". `);  


  await nlp.train();
  
  const response = await nlp.process('en', input);
  
  console.log(response);
  res.status(200).json({ name: response });
}
