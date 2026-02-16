import {IsAlphanumeric, IsDate, IsEmail, IsLatitude, IsLongitude, IsPhoneNumber, IsString, isString} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UserCreationDTO {
    @ApiProperty({
        description: 'Full name of the user',
        example: 'John Doe',
        type: String
    })
    @IsString()
    name
    
    @ApiProperty({
        description: 'Gender of the user', 
        example: 'MALE',
        enum: ['MALE', 'FEMALE']
    })
    @IsString()
    sex 
    
    @ApiProperty({
        description: 'Email address of the user',
        example: 'john.doe@example.com',
        type: String
    })
    @IsEmail()
    email
    
    @IsPhoneNumber()
    phone_number
    @ApiProperty({
        description: 'User password (alphanumeric)',
        example: 'password123',
        type: String
    })
    @IsAlphanumeric()
    password
    
    @ApiProperty({
        description: 'Last active timestamp',
        example: '2024-02-12T10:30:00Z',
        type: Date
    })
    @IsDate()
    lastActive
    
    @ApiProperty({
        description: 'Type of farming system used',
        example: 'Organic farming',
        type: String
    })
    @IsString()
    farmingSystem
    
    @ApiProperty({
        description: 'District where the user is located',
        example: 'Kigali',
        type: String
    })
    district
    
    @ApiProperty({
        description: 'Sector within the district',
        example: 'Gasabo',
        type: String
    })
    sector
    
    @ApiProperty({
        description: 'Village within the sector',
        example: 'Remera',
        type: String
    })
    village
    
    @ApiProperty({
        description: 'Cell within the village',
        example: 'Urugwiro',
        type: String
    })
    cell
    
    @ApiProperty({
        description: 'Latitude coordinate of user location',
        example: -1.9441,
        type: Number
    })
    @IsLatitude()
    latitude
    
    @ApiProperty({
        description: 'Longitude coordinate of user location',
        example: 30.0619,
        type: Number
    })
    @IsLongitude()
    longitude
}

export class UserLoginDTO{
    @IsString()
    userId
    @IsEmail()
    email
}