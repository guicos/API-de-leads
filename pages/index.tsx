  import { useEffect, useState } from 'react';
  import Image from 'next/image';
  import { useLead } from '@/src/hooks/useLead';
	import CreatableSelect  from "react-select/creatable";
  import Logo from '../public/images/Logo.jpg'
  import styles from '../styles/dashboard.module.css';
  import { ILead } from '@/src/interfaces/ILead.interface';
	import Link from 'next/link';
  
  export default function Dashboard() {
    const { lead } = useLead();
    const [resultQuery, setresultQuery] = useState<ILead[]>([]);
		const [query, setQuery] = useState('');
    
    const optionsCnae = lead.map(leads => (
      {
        value: leads.empresa.cnae.nome,
        label: leads.empresa.cnae.nome,
        name: "NomeCnae"
      }
      ))
      
      const optionSector = lead.map(leads => ({
        value: leads.empresa.setor.nome,
        label: leads.empresa.setor.nome,
        name: "NomeSetor"
      }))
      
      const optionArea = lead.map(leads => ({
        value: leads.area.nome,
        label: leads.area.nome,
        name: "NomeArea"
      }))
      
      const optionOffice = lead.map(leads => ({
        value: leads.cargo.nome,
        label: leads.cargo.nome,
        name: "NomeCargo"
      }))
      
      const optionDDDLeads = lead.map(leads => ({
        value: leads.DDD,
        label: leads.DDD,
        name: "DDD"
      }))
      
      const optionDDDEmpresa = lead.map(leads => ({
        value: leads.DDD,
        label: leads.DDD,
        name: "DDDEmpresa"
      }))
      
      const optionFilial = [
        {
          value: 1,
          label: "Sim",
          name: "Filial"
        },
        {
          value: 0,
          label: "Não",
          name: "Filial"
        }
      ]
      
      const optionNomeLead = lead.map(leads => ({
        value: leads.nome,
        label: leads.nome,
        name: "Nome"
      }))
      
      const optionTelefoneLead = lead.map(leads => ({
        value: leads.telefone,
        label: leads.telefone,
        name: "Telefone"
      }))
      
      const optionTelefoneEmpresa = lead.map(leads => ({
        value: leads.empresa.telefone,
        label: leads.empresa.telefone,
        name: "EmpresaTelefone"
      }))
      
      const optionNomeEmpresa = lead.map(leads => ({
        value: leads.empresa.nome_empresa,
        label: leads.empresa.nome_empresa,
        name: "NomeEmpresa"
      }))
      
      const optionNomeFantasia = lead.map(leads => ({
        value: leads.empresa.nome_fantasia,
        label: leads.empresa.nome_fantasia,
        name: "NomeFantasia"
      }))
      
      const optionCNPJ = lead.map(leads => ({
        value: leads.empresa.CNPJ,
        label: leads.empresa.CNPJ,
        name: "CNPJ"
      }))
      
      const optionNumeroFilial = lead.map(leads => ({
        value: leads.empresa.numero_filial,
        label: leads.empresa.numero_filial,
        name: "NumeroFilial"
      }))

			useEffect(() => {
				if(query != ''){
					
				}
			}, [query])
      
      const handleRequestGet = (event: any) => {
				if(event){
					fetch(`http://brutadev.kinghost.net:21023/lead?${event.name}=${event.value}`)
							.then((response) => response.json())
							.then((data) => setresultQuery(data))
				}
      }
      
      const handleShowList = resultQuery.map((element: ILead) => (
        <div key={element.id} className={styles.quadro}>					
					<table key={element.id} className={styles.table}>
						<tbody>
							<tr className={styles.trList}>
								<td className={styles.td}>{element.nome}</td>
								<td className={styles.td}>{element.telefone}</td>
								<td className={styles.td}>{element.empresa.nome_empresa}</td>
								<td className={styles.td}>{element.empresa.setor.nome}</td>
								<td className={styles.td}>{element.empresa.cnae.nome}</td>
								<td className={styles.td}>{element.empresa.telefone}</td>
							</tr>
						</tbody>
					</table>
				</div>
					
        
        ))
        
        return (
          <>
          <header className={styles.header}>
          <Image
          src={Logo}
          alt="Logo Bruta Marketing"
          width={100}
          />
          <a href="">Sair</a></header>
          <main className={styles.content}>
          <nav className={styles.menu}>
          <ul>
          <li>Filtro</li>
          <li>Cadastro</li>
          </ul>
          </nav>
          <article className={styles.main}>
          <div className={styles.menores}>
						<CreatableSelect
						isClearable
						id="Cnae"
						instanceId="selectCnae"
						name="colors"
						className={styles.input}
						classNamePrefix="select"
						options={optionsCnae}
						onChange={handleRequestGet}
						placeholder="Cnae"
						/>
						<CreatableSelect
						id="Setor"
						isClearable
						instanceId="selectSetor"
						name="colors"
						className={styles.input}
						classNamePrefix="select"
						options={optionSector}
						onChange={handleRequestGet}
						placeholder="Setor"
						/>
						<CreatableSelect
						id="Area"
						isClearable
						instanceId="selectArea"
						name="colors"
						className={styles.input}
						classNamePrefix="select"
						options={optionArea}
						onChange={handleRequestGet}
						placeholder="Área"
						/>
						
						<CreatableSelect
						id="Cargo"
						isClearable
						instanceId="selectCargo"
						name="colors"
						className={styles.input}
						classNamePrefix="select"
						options={optionOffice}
						onChange={handleRequestGet}
						placeholder="Cargo"
						/>
						
						<CreatableSelect
						id="DDDLead"
						isClearable
						instanceId="selectDDDLead"
						name="colors"
						className={styles.input}
						classNamePrefix="select"
						options={optionDDDLeads}
						onChange={handleRequestGet}
						placeholder="DDD"
						/>
						
						<CreatableSelect
						id="DDDEmpresa"
						isClearable
						instanceId="selectDDDEmpresa"
						name="colors"
						className={styles.input}
						classNamePrefix="select"
						options={optionDDDEmpresa}
						onChange={handleRequestGet}
						placeholder="DDD da Empresa"
						/>
						
						<CreatableSelect
						id="Filial"
						isClearable
						instanceId="selectFilial"
						name="colors"
						className={styles.input}
						classNamePrefix="select"
						options={optionFilial}
						onChange={handleRequestGet}
						placeholder="Possui Filial"
						/>

					<CreatableSelect
						id="NumeroFilial"
						isClearable
						instanceId="selectNumeroFilial"
						name="colors"
						className={styles.input}
						classNamePrefix="select"
						options={optionNumeroFilial}
						onChange={handleRequestGet}
						placeholder="Nº de Filiais"
						/>
					</div>
					<div className={styles.media}>
					<CreatableSelect
						id="telefoneLead"
						isClearable
						instanceId="selectTelefoneLead"
						name="colors"
						className={styles.inputTelefone}
						classNamePrefix="select"
						options={optionTelefoneLead}
						onChange={handleRequestGet}
						placeholder="Telefone do Lead"
						/>
						
						<CreatableSelect
						id="EmpresaTelefone"
						isClearable
						instanceId="selectEmpresaTelefone"
						name="colors"
						className={styles.inputTelefone}
						classNamePrefix="select"
						options={optionTelefoneEmpresa}
						onChange={handleRequestGet}
						placeholder="Telefone da Empresa"
						/>

						<CreatableSelect
						id="CNPJ"
						isClearable
						instanceId="selectCnpj"
						name="colors"
						className={styles.inputTelefone}
						classNamePrefix="select"
						options={optionCNPJ}
						onChange={handleRequestGet}
						placeholder="CNPJ"
						/>
					</div>
					<div className={styles.maiores}>
					<CreatableSelect
						id="NomeLead"
						isClearable
						instanceId="selectNomeLead"
						name="colors"
						className={styles.inputNome}
						classNamePrefix="select"
						options={optionNomeLead}
						onChange={handleRequestGet}
						placeholder="Nome do Lead"
						/>
						<CreatableSelect
						id="NomeEmpresa"
						isClearable
						instanceId="selectNomeEmpresa"
						name="colors"
						className={styles.inputNome}
						classNamePrefix="select"
						options={optionNomeEmpresa}
						onChange={handleRequestGet}
						placeholder="Nome da Empresa"
						/>
						<CreatableSelect
						id="NomeFantasia"
						isClearable
						instanceId="selectNomeFantasia"
						name="colors"
						className={styles.inputNome}
						classNamePrefix="select"
						options={optionNomeFantasia}
						onChange={handleRequestGet}
						placeholder="Nome Fantasia"
						/>
					</div>
					<table className={styles.table}>
						<tbody>
							<tr className={styles.trTopicos}>
							<td>Nome</td>
							<td>Telefone</td>
							<td>Empresa</td>
							<td>Setor</td>
							<td>CNAE</td>
							<td>Telefone Empresa</td>
							</tr>
						</tbody>
					</table>
					{handleShowList}
          </article>
          </main>
          </>
          )
        }
        