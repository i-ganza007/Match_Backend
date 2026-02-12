import {IsAlphanumeric, IsDate, IsEmail, IsLatitude, IsLongitude, IsString, isString} from 'class-validator'
export class UserCreationDTO {
    @IsString()
    name
    @IsString()
    sex 
    @IsEmail()
    email
    @IsAlphanumeric()
    password
    @IsDate()
    lastActive
    @IsString()
    farmingSystem
    district
    sector
    village
    cell
    @IsLatitude()
    latitude
    @IsLongitude()
    longitude
}