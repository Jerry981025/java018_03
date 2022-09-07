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
	
	private Integer mId; 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer aId;
	private String aAddress;

	public AddressBean() {
	}

	public AddressBean(Integer mId, Integer aId, String aAddress) {
		this.mId = mId;
		this.aId = aId;
		this.aAddress = aAddress;
	}

	public Integer getmId() {
		return mId;
	}

	public void setmId(Integer mId) {
		this.mId = mId;
	}

	public Integer getaId() {
		return aId;
	}

	public void setaId(Integer aId) {
		this.aId = aId;
	}

	public String getaAddress() {
		return aAddress;
	}

	public void setaAddress(String aAddress) {
		this.aAddress = aAddress;
	}

	@Override
	public String toString() {
		return "AddressBean [mId=" + mId + ", aId=" + aId + ", aAddress=" + aAddress + "]";
	}

}
