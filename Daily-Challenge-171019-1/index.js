function uniqueChar(textString) 
    {
      let unique= "";
      for(let i = 0; i < textString.length; i++)
      {
        if(unique.indexOf(textString.charAt(i)) < 0) 
        {
          unique += textString.charAt(i);
        }
      }
      return unique;
    }
    uniqueChar("thequickbrownfoxjumpsoverthelazydog");
    