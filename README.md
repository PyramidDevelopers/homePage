# Pyramid Developer's Website

## To test locally
`npm start`

## To Update Our Team, 
1. Download a portrait photo
2. Go to https://pinetools.com/grayscale-image and convert to Black and White
3. Go to https://imageresizer.com/ and resize to 324 * 326 (Can crop if required first and then resize)
4. Place in the src/assets folder
5. Go to src/Components/OurTeam.js
    Add `import <name> from '../../assets/<name>.png';`
6. Replace existing with new  
    ```               
     <Member
    image={<name>}
    name="<name>"
    role="<role>"
    />```