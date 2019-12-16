using System;
using System.Security.Cryptography;
using System.Text;

namespace NeverForget.Backend.Utility
{
    public static class shaUtil
    {
        // sha encrption 
        public static string getSHA1(string password) {
            // string to byte 
            byte[] bytes = Encoding.UTF8.GetBytes(password);
            // create an    instance SHA1 
            var sha1 = SHA1.Create();
            // computehash 
             byte[] computeHash = sha1.ComputeHash(bytes);
            // byte to string  BASE64
            return hexCodefromBytes(computeHash); //  byte 
        }

        public static string hexCodefromBytes(byte[] bytes  ) {
            // 10,15,10,15,15,15,12
            StringBuilder stringBuilder = new StringBuilder();
            foreach (var data in bytes)
            {
                var hex =   data.ToString("X2");
                stringBuilder.Append(hex);
            }
           return stringBuilder.ToString();
        }
    }
}