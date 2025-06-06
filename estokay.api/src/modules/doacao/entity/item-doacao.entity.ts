import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Doacao } from './doacao.entity';

@Entity({ name: 'ItensDoacao' })
export class ItemDoacao {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ length: 127 })
  descricao: string;

  @Column()
  quantidade: number;

  @Column()
  categoria: string;

  @Column({ nullable: true })
  tamanho: string;

  @Column()
  medida: string;

  @Column({ nullable: true, type: 'date' })
  validade: Date;

  @ManyToOne(() => Doacao, (doacao) => doacao.itens, {
    onDelete: 'CASCADE', // remove os itens ao deletar a doação
  })
  doacao: Doacao;

  @CreateDateColumn()
  criado: string;

  @UpdateDateColumn()
  modificado: string;
}
