import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, ManyToOne } from "typeorm";
import { verificationTarget, PHONE, EMAIL } from '../types/types';
import User from "./User";

@Entity()
class Verification extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", enum: [PHONE, EMAIL] })
  target: verificationTarget;

  @Column({ type: "text" })
  payload: string;

  @Column({ type: "text" })
  key: string;

  @Column({ type: "boolean", default: false })
  used: boolean;

  @ManyToOne(type => User, user => user.verifications)
  user: User

  @BeforeInsert()
  createKey(): void {
    if(this.target === PHONE) {
      this.key = Math.floor(Math.random() * 100000).toString();
    } else if (this.target === EMAIL){
      this.key = Math.random().toString(36).substr(2);
    }
  }

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

}

export default Verification;