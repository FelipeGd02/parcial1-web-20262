export  class UpdateScreeningDto {
    movieTitle?: string;
    startsAt?: Date;
    roomId?: number;
    status!: 'scheduled' | 'cancelled'
}