function validation ()
{
     if(document.Formfill.Username.value=="")
        {
        document.getElementById("result").innerHTML="Enter Username* ";
        return false;
        }
     else if(document.Formfill.Username.value.length<6)
        {
        document.getElementById("result").innerHTML=" username consist atleast 6 letters ";
        return false;
        }
        else if(document.Formfill.Email.value=="")
            {
            document.getElementById("result").innerHTML="Enter your Email ";
            return false;
            }
            else if(document.Formfill.password.value=="")
                {
                document.getElementById("result").innerHTML="Enter your Password ";
                return false;
                }
                else if(document.Formfill.password.value.length<8)
                    {
                    document.getElementById("result").innerHTML="Password must contain 8 letters ";
                    return false;
                    }
                    else if(document.Formfill.CPassword.value=="")
                        {
                        document.getElementById("result").innerHTML=" Enter Confirm Password ";
                        return false;
                        }
                        else if(document.Formfill.CPassword.value !== document.Formfill.password.value)
                            {
                            document.getElementById("result").innerHTML=" Password dose not match ";
                            return false;
                            }
                            else if(document.Formfill.password.value   == document.Formfill.CPassword.value)
                                {
                               popup.classList.add("open-slide")
                                return false;
                                }
                                                    
}


                   var popup=document.getElementById('popup');
                   function CloseSlide(){
                    popup.classList.remove("open-slide")
                   }

                    