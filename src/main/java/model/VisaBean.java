package model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "visa")
public class VisaBean {

	private MemberBean member_MId;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer vId;
	
	private String vAccount;
	
	public VisaBean() {
	}

	public VisaBean(MemberBean member_MId, Integer vId, String vAccount) {
		this.member_MId = member_MId;
		this.vId = vId;
		this.vAccount = vAccount;
	}

	public MemberBean getMember_MId() {
		return member_MId;
	}

	public void setMember_MId(MemberBean member_MId) {
		this.member_MId = member_MId;
	}

	public Integer getvId() {
		return vId;
	}

	public void setvId(Integer vId) {
		this.vId = vId;
	}

	public String getvAccount() {
		return vAccount;
	}

	public void setvAccount(String vAccount) {
		this.vAccount = vAccount;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("VisaBean [member_MIdv=");
		builder.append(member_MId);
		builder.append(", vId=");
		builder.append(vId);
		builder.append(", vAccount=");
		builder.append(vAccount);
		builder.append("]");
		return builder.toString();
	}

}
