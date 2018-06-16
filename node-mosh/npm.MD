### Node Package Manager

1. NPM is a registery and package manager for node. Contains third party libraries.
2. package.json contains meta data about the project. Can create by commant "npm init"
3. npm init --yes will generate default package.json
4. install new package eg: `npm install package_name --save` Or `npm i package_name`
5. Always add node_modules to .gitignore file as package.json can be used download depencies later.

### Semantic versioning or SemVer

eg:- 4.12.4 // Major.Minor.Patch 
Major :-> full new version
Minor :-> will additional feature to current major version
Patch :-> Bug fixes to current version

Symbol meaning package.json dependencies list

"^" -> this symbol means will install the Major version with latest update
"^4.2.3" will install lastest 4 version ie the minor version will be updated
"~" -> means will upate upto the patch version

1. list all depencies and version use `npm list`.
2. list only the project depencies use `npm list --depth=0`
3. list a single package details `npm package_name view`
4. list a single package versions `npm package_name view versions`
5. install a specific package version `npm package_name@2.3.4`
6. list outdated  package information `npm outdated`
7. update minotr and patch version in package.json `npm update`
8. To update to the current latest version can use "npm-check-updates" globally, the we can use `ncu -u` to update package.json with latest
   versions and npm install will update all the packages
9. developement dependencies can be installed as ` npm i pkg_name --save-dev`
10. Uninstall a package `npm uninstall/un name_of_package`
12. Global package  need to specify '-g' in commands   
13. we can publish packages to npm as follows, npm adduser/ npm login, then npm publish. To publish an updated package first upated version as       follows npm version 2.3.4(major, minor, patch)