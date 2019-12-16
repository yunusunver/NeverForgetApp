using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using NeverForget.Backend.Models;
using NeverForget.Backend.Services;

namespace NeverForget.Backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
             var key = Configuration.GetValue<string>("secretkey");
            var bytes = Encoding.UTF8.GetBytes(key);
            
            services.Configure<NeverForgetDatabaseSettings>(
        Configuration.GetSection(nameof(NeverForgetDatabaseSettings)));

        services.AddSingleton<INeverForgetDatabaseSettings>(sp =>
        sp.GetRequiredService<IOptions<NeverForgetDatabaseSettings>>().Value);
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            // [Authorize]
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)  
            .AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(bytes),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

                services.AddSingleton<UserService>();
                services.AddSingleton<LookupService>();
                services.AddSingleton<NotesService>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseAuthentication();

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
