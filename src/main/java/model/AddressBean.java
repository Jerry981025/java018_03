package model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "address")
public class AddressBean implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private MemberBean member_MId; 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "AId")
	private Integer aId;
	private String address;

	public AddressBean() {
	}

	public AddressBean(MemberBean member_MId, Integer aId, String address) {
		this.member_MId = member_MId;
		this.aId = aId;
		this.address = address;
	}

	public MemberBean getMember_MId() {
		return member_MId;
	}

	public void setMember_MId(MemberBean member_MId) {
		this.member_MId = member_MId;
	}

	public Integer getaId() {
		return aId;
	}

	public void setaId(Integer aId) {
		this.aId = aId;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "AddressBean [member_MId=" + member_MId + ", aId=" + aId + ", address=" + address + "]";
	}
	


}
